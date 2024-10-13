import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from 'src/components/ui/button';
import { useForm } from "react-hook-form";
import { Input } from "src/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "src/components/ui/form";
import { SignupValidation } from "src/lib/validation";
import Loader from "@/components/ui/Loader";
import ParticlesComponent from "src/components/ui/particlebackground";


const formSchema = z.object({
name: z.string().min(2).max(50),
});


const SignUpForm = () => {
const isLoading = false;


// 1. Define your form.
const form = useForm<z.infer<typeof SignupValidation>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
    email: "",
    uin: null,
    major: "",
    expectedGradYear: undefined,
    academicYear: "",
  },
});


 // 2. Define a submit handler.
function onSubmit(values: z.infer<typeof SignupValidation>) {
  console.log(values);
} 


return (
  <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
    {/* Background Component */}
    <div className="absolute inset-0 z-0">
      <ParticlesComponent />
    </div>


    {/* Form Content */}
    <div className="relative z-10 p-10 rounded shadow-lg max-h-[80vh] overflow-y-auto scrollable-container">
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
          <img
            src="/images/EagleHacksLogo2024.png"
            alt="logo"
            style={{ width: '420px', height: '300px', marginTop: '0px' }}
          />
          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Register for EagleHacks 2025!</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            Fill out the form and click the submit button below
          </p>


          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-96 mt-4 pb-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Eagle Email</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="uin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>UIN Number</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="major"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Major</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="expectedGradYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Graduation Year</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="academicYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic Year</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <Button type="submit" className="shad-button_primary">
              {isLoading ? (
                <div className="flex-center gap-2">
                  <Loader /> Loading...
                </div>
              ) : "Submit"}
            </Button>
          </form>
        </div>
      </Form>
    </div>
  </div>
);
};


export default SignUpForm;
