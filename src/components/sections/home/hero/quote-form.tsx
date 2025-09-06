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
import { GodlyButton } from "@/components/ui/godly-button";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";

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

export const inputClasses =
  "border-none shadow-none p-0 text-lg sm:text-xl lg:text-2xl font-marlton placeholder:text-lg placeholder:sm:text-xl placeholder:lg:text-2xl w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none";

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

interface QuoteFormProps {
  hideImages?: boolean;
}

export function QuoteForm({ hideImages = false }: QuoteFormProps) {
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
    <div className="bg-paper-14 rounded-[6px] sm:rounded-[8px] lg:rounded-[10px] flex flex-col gap-2 sm:gap-3 text-[#2D2B2B] max-w-[1332px] w-full relative">
      <div className="flex flex-col sm:flex-row px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 justify-between items-start sm:items-center bg-paper-16 rounded-t-[6px] sm:rounded-t-[8px] lg:rounded-t-[10px] relative z-10 gap-3 sm:gap-0">
        <h2 className="font-marlton text-[32px] sm:text-[48px] lg:text-[64px] tracking-[1.6px] sm:tracking-[2.4px] lg:tracking-[3.2px] leading-[100%]">
          LET US CALL YOU!
        </h2>
        <p className="font-satoshi max-w-[367px] text-left sm:text-right text-base sm:text-lg lg:text-2xl font-medium">
          Receive a call within 30 minutes during normal business hours.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 sm:p-6 lg:p-8 relative z-10 text-[#312E2C]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="sm:col-span-4 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
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
                <FormItem className="sm:col-span-4 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
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
                <FormItem className="sm:col-span-4 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
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
                <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
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
                <FormItem className="sm:col-span-4 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          type="button"
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
                <FormItem className="sm:col-span-2 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
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

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 sm:mt-8.5 gap-4 sm:gap-0">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="size-[22px] border border-black cursor-pointer shrink-0 flex items-center justify-center"
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked && (
                  <CheckIcon className="size-4 text-black shrink-0" />
                )}
              </button>
              <span
                className="text-[#312E2C] font-satoshi cursor-pointer text-base sm:text-lg lg:text-xl font-medium select-none"
                onClick={() => setIsChecked(!isChecked)}
              >
                I agree to get information text messages from Godly about my
                estimate and project
              </span>
            </div>
            <GodlyButton type="submit">
              <span>REQUEST A QUOTE</span>
              <Image
                src={ArrowRight.src}
                alt="Arrow Right"
                width={32}
                height={33}
              />
            </GodlyButton>
          </div>
        </form>
      </Form>

      <div className="absolute flex items-center justify-center -top-[75px] sm:-top-[100px] lg:-top-[150px] -right-16 sm:-right-24 lg:-right-33 w-[180px] sm:w-[270px] lg:w-[354.512px] h-[180px] sm:h-[270px] lg:h-[353.446px] rotate-[-16deg] z-0">
        <Image
          src="/images/home/hero/tape.png"
          alt="Tape"
          width={234.158}
          height={266.58}
          className="shrink-0 w-[120px] sm:w-[180px] lg:w-[234.158px] h-auto"
        />
      </div>

      {!hideImages && (
        <>
          <Image
            src="/images/home/hero/hero-lights-left.webp"
            alt="Hero Lights Left"
            width={382.851}
            height={253.958}
            className="shrink-0 rotate-[-24deg] scale-x-[-1] aspect-[101/67] absolute -bottom-16 sm:-bottom-32 lg:-bottom-62 -left-8 sm:-left-26 lg:-left-52 -z-10 w-[150px] sm:w-[250px] lg:w-[382.851px]"
          />
          <Image
            src="/images/home/hero/hero-lights-right.webp"
            alt="Hero Lights Right"
            width={465.548}
            height={308.814}
            className="shrink-0 aspect-[101/67] rotate-[22deg] absolute -bottom-8 sm:-bottom-16 lg:-bottom-32 -right-8 sm:-right-16 lg:-right-32 -z-10 w-[180px] sm:w-[300px] lg:w-[465.548px]"
          />
        </>
      )}
    </div>
  );
}
