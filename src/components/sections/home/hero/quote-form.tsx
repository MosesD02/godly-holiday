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
import { CalendarIcon } from "@/components/icons/calendar";
import { useState } from "react";
import { CheckIcon } from "lucide-react";

const formSchema = z.object({
  name: z
    .string({
      message: "A name is required.",
    })
    .min(1),
  email: z.email({
    message: "A valid email is required.",
  }),
  phone: z
    .string({
      message: "A phone number is required.",
    })
    .min(1),
  services: z.array(z.string()),
  date: z.date({
    error: "A date is required.",
  }),
  zipCode: z
    .number({
      message: "A zip code is required.",
    })
    .min(1),
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
  const [isChecked, setIsChecked] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      services: [],
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
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
                  />{" "}
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
                  />{" "}
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
                    <MultiSelectContent
                      search={false}
                      className="[--popover:#fde4c8]"
                    >
                      <MultiSelectGroup>
                        {services.map((service) => (
                          <MultiSelectItem
                            key={service.value}
                            value={service.value}
                            className="text-[#312E2C]"
                          >
                            {service.label}
                          </MultiSelectItem>
                        ))}
                      </MultiSelectGroup>
                    </MultiSelectContent>
                  </MultiSelect>
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
                          <CalendarIcon className="ms-auto mt-3" />
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

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <button
                className="size-[22px] border border-black cursor-pointer flex items-center justify-center"
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked && (
                  <CheckIcon className="size-4 text-black shrink-0" />
                )}
              </button>
              <span
                className="text-[#312E2C] font-satoshi cursor-pointer text-xl font-medium select-none"
                onClick={() => setIsChecked(!isChecked)}
              >
                I agree to get information text messages from Godly about my
                estimate and project
              </span>
            </div>
            <Button type="submit">REQUEST A QUOTE</Button>
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
