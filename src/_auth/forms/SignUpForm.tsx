import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from 'src/components/ui/button';
import { useForm } from "react-hook-form";
import { Input } from "src/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "src/components/ui/form";
import Loader from "@/components/ui/Loader";
import ParticlesComponent from "src/components/ui/particlebackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  uin: z.string().min(1).max(9),
  major: z.string(),
  expectedGradYear: z.preprocess((val) => Number(val), z.number().min(1900).max(2100)),  // Convert to number
  tShirtSize: z.string(),
  dietaryRestriction: z.string(),
  firstHackathon: z.string(),
  programmingExperience: z.string(),
});

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);  
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      uin: "",
      major: "",
      expectedGradYear: undefined,
      tShirtSize: "",
      dietaryRestriction: "",
      firstHackathon: "",
      programmingExperience: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);  
    try {
      const response = await fetch("https://eagle-hacks-2025-backend.onrender.com/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),  // sending form values to the backend
      });

      const data = await response.json();
      console.log(data); 
      if (response.ok) {
        navigate("/SuccessPage");
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); 
    }
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
              src="/images/EagleHacksLogo2025.png"
              alt="logo"
              style={{ width: 'auto', height: 'auto'}}
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
                      <Input type="email" className="shad-input" {...field} />
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
                      <Input type="text" className="shad-input" {...field} />
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
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tShirtSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>T-Shirt Size (XS, S, M, L, XL)</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dietaryRestriction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have any dietary restrictions? (Please Specify)</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstHackathon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Is this your first hackathon?</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="programmingExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What programming languages / frameworks are you familiar with?</FormLabel>
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
