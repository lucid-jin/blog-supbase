'use client'

import {FormEvent, useEffect, useRef} from "react";
import {createClient} from "@/utils/supbase/client";

export const PostForm = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const supabase = createClient()
    const res = supabase.from('post').select()


    const handleSubmit =  (e: FormEvent<HTMLFormElement>) => {
        const title: string = formRef.current?.querySelector<HTMLInputElement>('input[type="text"]')?.value || ''
        const body: string = formRef.current?.querySelector<HTMLTextAreaElement>('textarea')?.value || ''
        e.preventDefault();

        action(title, body)
    }

    const action = async (title: string, body: string) => {
        console.log(title,body)

        try {
            await supabase.from('posts').insert( {
                title: title,
                content: body
            })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        const fetch = async () => {
            const { data}  = await supabase.from('posts').select()
            console.log(data, 'data')
            return data
        }
        fetch()
    }, [supabase]);


    return <form className={'flex flex-col p-20'} ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" name="title" type="text" required/>
            <label htmlFor="body">Body:</label>
            <textarea id="body" name="body" required/>
            <button type="submit">Submit</button>
        </form>

}