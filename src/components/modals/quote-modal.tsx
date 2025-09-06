"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { useState } from "react";
import { CheckIcon, X } from "lucide-react";

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
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { CalendarIcon } from "@/components/icons/calendar";
import { GodlyButton } from "@/components/ui/godly-button";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import { useQuoteModal } from "@/hooks/use-quote-modal";
import { DialogTitle } from "@radix-ui/react-dialog";

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
  "border-none shadow-none p-0 text-base sm:text-lg lg:text-xl font-marlton placeholder:text-base placeholder:sm:text-lg placeholder:lg:text-xl w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none";

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

export function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
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
    // Close modal after successful submission
    closeModal();
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto sm:max-w-fit bg-paper-14 border-none p-0 gap-0">
        {/* Header */}
        <DialogTitle className="sr-only">LET US CALL YOU!</DialogTitle>
        <div className="flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 py-4 sm:py-6 justify-between items-start sm:items-center bg-paper-16 rounded-t-[6px] sm:rounded-t-[8px] lg:rounded-t-[10px] relative z-10 gap-3 sm:gap-0">
          <div className="flex-1">
            <h2 className="font-marlton text-2xl sm:text-3xl lg:text-4xl tracking-[1.2px] sm:tracking-[1.8px] lg:tracking-[2.4px] leading-[100%] text-[#2D2B2B]">
              LET US CALL YOU!
            </h2>
            <p className="font-satoshi text-sm sm:text-base lg:text-lg font-medium text-[#2D2B2B] mt-2">
              Receive a call within 30 minutes during normal business hours.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] transition-all duration-300 shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D2B2B]" />
          </button>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 sm:p-6 lg:p-8 relative z-10 text-[#312E2C]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="sm:col-span-4 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel className="text-sm sm:text-base">Name</FormLabel>
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
                  <FormItem className="sm:col-span-4 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel htmlFor="email" className="text-sm sm:text-base">
                      Email
                    </FormLabel>
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
                  <FormItem className="sm:col-span-4 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel htmlFor="phone" className="text-sm sm:text-base">
                      Phone
                    </FormLabel>
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
                  <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel className="text-sm sm:text-base">
                      Services
                    </FormLabel>
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
                  <FormItem className="sm:col-span-4 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel className="text-sm sm:text-base">Date</FormLabel>
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
                            <CalendarIcon className="ms-auto mt-2" />
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
                  <FormItem className="sm:col-span-2 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel
                      htmlFor="zipCode"
                      className="text-sm sm:text-base"
                    >
                      Zip Code
                    </FormLabel>
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 sm:mt-8 gap-4 sm:gap-0">
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  className="size-5 sm:size-6 border border-black cursor-pointer shrink-0 flex items-center justify-center mt-0.5"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  {isChecked && (
                    <CheckIcon className="size-3 sm:size-4 text-black shrink-0" />
                  )}
                </button>
                <span
                  className="text-[#312E2C] font-satoshi cursor-pointer text-sm sm:text-base lg:text-lg font-medium select-none leading-relaxed"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  I agree to get information text messages from Godly about my
                  estimate and project
                </span>
              </div>
              <GodlyButton type="submit" className="mt-4 sm:mt-0">
                <span>REQUEST A QUOTE</span>
                <Image
                  src={ArrowRight.src}
                  alt="Arrow Right"
                  width={24}
                  height={25}
                  className="sm:w-8 sm:h-[33px]"
                />
              </GodlyButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
