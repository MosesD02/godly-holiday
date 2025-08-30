/* eslint-disable @next/next/no-img-element */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "A name is required.",
  }),
  email: z.email({
    message: "A valid email is required.",
  }),
  phone: z.string().min(1, {
    message: "A phone number is required.",
  }),
  services: z.array(z.string()),
  date: z.date({
    error: "A date is required.",
  }),
  zipCode: z.number().min(1, {
    message: "A zip code is required.",
  }),
});

const inputClasses =
  "border-none shadow-none p-0 text-2xl md:text-2xl font-marlton placeholder:text-2xl placeholder:md:text-2xl w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none";

const services = [
  {
    label: "Exterior Window Cleaning",
    value: "exterior-window-cleaning",
  },
  {
    label: "House Washing",
    value: "house-washing",
  },
  {
    label: "Paver Sealing",
    value: "paver-sealing",
  },
  {
    label: "Roof Washing",
    value: "roof-washing",
  },
  {
    label: "Pressure Washing",
    value: "pressure-washing",
  },
  {
    label: "Other",
    value: "other",
  },
];

export function QuoteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      services: [],
      date: new Date(),
      zipCode: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-paper-14 rounded-[10px] flex flex-col gap-3 text-[#2D2B2B] max-w-[1332px] w-full relative">
      <div className="flex px-12 py-8 justify-between items-center bg-paper-16 rounded-t-[10px] relative z-10">
        <h2 className="font-marlton text-[64px] tracking-[3.2px] leading-[100%] -mt-6">
          LET US CALL YOU!
        </h2>
        <p className="font-satoshi max-w-[367px] text-right text-2xl font-medium">
          Receive a call within 30 minutes during normal business hours.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-8 relative z-10 text-[#312E2C]"
        >
          <div className="grid grid-cols-12 gap-8">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-4 pb-3 gap-4 border-b border-[#312E2C]">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="name"
                      placeholder="YOUR NAME"
                      type="text"
                      {...field}
                      className={inputClasses}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-4 pb-3 gap-4 border-b border-[#312E2C]">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    autoComplete="email"
                    placeholder="YOUR EMAIL"
                    type="email"
                    {...field}
                    className={inputClasses}
                  />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-4 pb-3 gap-4 border-b border-[#312E2C]">
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    id="phone"
                    autoComplete="tel"
                    placeholder="+1 XXX XXX XXXX"
                    type="tel"
                    {...field}
                    className={inputClasses}
                  />
                </FormItem>
              )}
            />

            {/* Services */}
            <FormField
              control={form.control}
              name="services"
              render={({ field }) => (
                <FormItem className="col-span-6 pb-3 gap-4 border-b border-[#312E2C]">
                  <FormLabel>Services</FormLabel>
                  <MultiSelect
                    onValuesChange={field.onChange}
                    values={field.value}
                  >
                    <FormControl>
                      <MultiSelectTrigger
                        className={cn(
                          inputClasses,
                          "hover:bg-transparent hover:text-[#312E2C] px-0!"
                        )}
                      >
                        <MultiSelectValue
                          overflowBehavior="cutoff"
                          placeholder="CHOOSE YOUR SERVICES"
                        />
                      </MultiSelectTrigger>
                    </FormControl>
                    <MultiSelectContent search={false}>
                      <MultiSelectGroup>
                        {services.map((service) => (
                          <MultiSelectItem
                            key={service.value}
                            value={service.value}
                          >
                            {service.label}
                          </MultiSelectItem>
                        ))}
                      </MultiSelectGroup>
                    </MultiSelectContent>
                  </MultiSelect>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="col-span-4 pb-3 gap-4 border-b border-[#312E2C]">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"ghost"}
                          className={cn(
                            inputClasses,
                            "hover:bg-transparent hover:text-[#312E2C] px-0!",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "MM / dd / yyyy")
                          ) : (
                            <span>Pick a date</span>
                          )}

                          {/* Calendar Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="13"
                            viewBox="0 0 17 13"
                            fill="none"
                            className="ms-auto mt-3"
                          >
                            <path
                              d="M16.0181 5.76271e-05H13.9056V1.50006C13.9056 1.64451 13.8755 1.78755 13.8171 1.92101C13.7587 2.05447 13.6732 2.17573 13.5653 2.27788C13.4574 2.38002 13.3293 2.46104 13.1883 2.51632C13.0474 2.57161 12.8963 2.60006 12.7437 2.60006C12.5911 2.60006 12.44 2.57161 12.2991 2.51632C12.1581 2.46104 12.03 2.38002 11.9221 2.27788C11.8142 2.17573 11.7286 2.05447 11.6702 1.92101C11.6119 1.78755 11.5818 1.64451 11.5818 1.50006V5.76271e-05H5.42907V1.50006C5.42907 1.7918 5.30666 2.07158 5.08876 2.27787C4.87086 2.48416 4.57533 2.60006 4.26718 2.60006C3.95903 2.60006 3.6635 2.48416 3.4456 2.27787C3.2277 2.07158 3.10529 1.7918 3.10529 1.50006V5.76271e-05H0.992765C0.867082 -0.00129644 0.742388 0.0212245 0.626059 0.0662886C0.509729 0.111353 0.404126 0.178045 0.315496 0.262421C0.226865 0.346796 0.157007 0.447142 0.110053 0.557523C0.0630984 0.667904 0.0400014 0.786079 0.0421279 0.905058V12.0951C0.0400297 12.2119 0.0622731 12.3281 0.107588 12.4368C0.152902 12.5455 0.2204 12.6448 0.306226 12.7288C0.392052 12.8129 0.494525 12.8801 0.607792 12.9266C0.721059 12.9731 0.842901 12.9981 0.966358 13.0001H16.0181C16.1416 12.9981 16.2634 12.9731 16.3767 12.9266C16.4899 12.8801 16.5924 12.8129 16.6782 12.7288C16.7641 12.6448 16.8316 12.5455 16.8769 12.4368C16.9222 12.3281 16.9444 12.2119 16.9423 12.0951V0.905058C16.9444 0.788177 16.9222 0.672049 16.8769 0.563308C16.8316 0.454567 16.7641 0.355343 16.6782 0.271303C16.5924 0.187263 16.4899 0.120052 16.3767 0.0735115C16.2634 0.0269707 16.1416 0.00201093 16.0181 5.76271e-05ZM4.26718 10.0001H3.21092V9.00006H4.26718V10.0001ZM4.26718 7.50006H3.21092V6.50006H4.26718V7.50006ZM4.26718 5.00006H3.21092V4.00006H4.26718V5.00006ZM7.43597 10.0001H6.37971V9.00006H7.43597V10.0001ZM7.43597 7.50006H6.37971V6.50006H7.43597V7.50006ZM7.43597 5.00006H6.37971V4.00006H7.43597V5.00006ZM10.6048 10.0001H9.5485V9.00006H10.6048V10.0001ZM10.6048 7.50006H9.5485V6.50006H10.6048V7.50006ZM10.6048 5.00006H9.5485V4.00006H10.6048V5.00006ZM13.7736 10.0001H12.7173V9.00006H13.7736V10.0001ZM13.7736 7.50006H12.7173V6.50006H13.7736V7.50006ZM13.7736 5.00006H12.7173V4.00006H13.7736V5.00006Z"
                              fill="#312E2C"
                            />
                          </svg>
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date <= new Date()}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Zip Code */}
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem className="col-span-2 pb-3 gap-4 border-b border-[#312E2C]">
                  <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
                  <Input
                    id="zipCode"
                    autoComplete="postal-code"
                    placeholder="ZIP CODE"
                    type="number"
                    {...field}
                    className={inputClasses}
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center mt-3">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>

      <div className="absolute flex items-center justify-center -top-[150px] -right-33 w-[354.512px] h-[353.446px] transform-[rotate(-16deg)] z-0">
        <img
          src="/images/home/hero/tape.png"
          alt="Tape"
          width={234.158}
          height={266.58}
          className="shrink-0"
        />
      </div>
    </div>
  );
}
