"use client"

import { 
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";        //  form accessible by shadcn-ui
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form';          //  form accessible by shadcn-ui
import { zodResolver } from '@hookform/resolvers/zod';      //  allows convenient creation of schemas based on form data
import { UserValidation } from "@/lib/validations/user";    //  passing through form data to schema
import * as z from 'zod';

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}

//  return form for user to complete sign-up
//  directly from shadcn-ui man: https://ui.shadcn.com/docs/components/form
const AccountProfile = ({ user, btnTitle }: Props) => {

    //  1. Define form.
    const form = useForm({      
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: '',
            name: '',
            username: '',
            bio: ''
        }
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof UserValidation>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values)
  }

    return (    
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
}

export default AccountProfile;
