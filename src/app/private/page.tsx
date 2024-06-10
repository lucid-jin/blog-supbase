import {redirect} from 'next/navigation'
import {createClient} from "@/utils/supbase/server";
import React from "react";
import {PostForm} from "@/app/components/PostForm";


export default async function PrivatePage() {
    const supabase = createClient()

    const {data, error} = await supabase.auth.getUser()
    if (error || !data?.user) {
        console.log(error, 'error', data, 'user')
        redirect('/login')
    }


    return <div>Hello {data.user.email} {data.user.id} <PostForm/></div>
}