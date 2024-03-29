"use client";
import { useCreateAppointment } from "@/hooks";
import { Grid, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import img from "../assets/map.png";
const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm();

  const appointmentMutation = useCreateAppointment();

  return (
    <section id="contact">
      <h1 className="text-xl md:text-3xl font-bold text-center mt-14 mb-0 md:mb-4">
        Contact With Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mx-3 md:mx-20 my-3 md:my-10">
        <div
          className="relative h-[35vh] md:h-[60vh] place-items-start items-center bg-cover overflow-hidden px-3 py-1"
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <div className="mt-10">
            <h1 className="text-sm font-semibold text-[#c49b66]">Phone :</h1>
            <p className="mt-3 text-[#8f8f8f]">+880 1690 143 060</p>
          </div>
          <div className="my-5">
            <h1 className="text-sm font-semibold text-[#c49b66]">Address :</h1>
            <p className="mt-3 text-[#8f8f8f]">Dhaka, Bangladesh</p>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-[#c49b66]">Email :</h1>
            <p className="mt-3 text-[#8f8f8f]">khanshakil.official@gmail.com</p>
          </div>
        </div>
        <div>
          <form
            onSubmit={form.handleSubmit((values) => {
              appointmentMutation.mutate(
                {
                  name: values.name,
                  email: values.email,
                  subject: values.subject,
                  message: values.message,
                },
                {
                  onSuccess: (val) => {
                    setSubmitting(false);
                    toast.success(val);
                    form.reset();
                  },
                  onError: (e) => {
                    setSubmitting(false);
                    toast.error(
                      e.message ||
                        "Something Went Wrong! Please try again later"
                    );
                  },
                }
              );
            })}
            className="space-y-5 mt-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="name"
                render={() => (
                  <input
                    {...form.register("name")}
                    type="text"
                    placeholder="Name"
                    style={{
                      width: "100%",

                      borderRadius: "10px",
                      padding: "15px",
                      color: "#fff",
                      backgroundColor: "#222",
                    }}
                  />
                )}
              />

              <Controller
                control={form.control}
                name="email"
                render={() => (
                  <input
                    {...form.register("email")}
                    type="text"
                    placeholder="Email"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      padding: "15px",
                      color: "#fff",
                      backgroundColor: "#222",
                    }}
                  />
                )}
              />

              <Controller
                control={form.control}
                name="subject"
                render={() => (
                  <input
                    {...form.register("subject")}
                    type="text"
                    placeholder="Subject"
                    className="col-span-full"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      padding: "15px",
                      color: "#fff",
                      backgroundColor: "#222",
                    }}
                  />
                )}
              />
            </div>
            <Grid item xs={12} md={6}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="Write your opinion/suggestion"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  padding: "15px",
                  color: "#fff",
                  backgroundColor: "#222",
                }}
                {...form.register("message")}
              />
            </Grid>
            <div className="flex justify-center md:justify-end">
              <button
                disabled={submitting}
                style={{
                  backgroundColor: "#c49b66",
                  border: "#c49b66",
                  color: "#fff",
                  padding: "10px 34px",
                  borderRadius: "30px",
                  position: "relative",
                  zIndex: "3",
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginRight: "10px",
                  boxShadow: "0px 5px 5px",
                  float: "right",
                  overflow: "hidden",
                }}
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
