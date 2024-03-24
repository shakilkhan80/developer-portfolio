"use client";
import {
    FormControl,
    Grid,
    InputLabel,
    TextField,
    TextareaAutosize,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
const Contact = () => {
  const form = useForm();

  return (
    <section
      id="contact"
      className="grid grid-cols-2 gap-4 justify-center items-center mx-20 my-20"
    >
      <div>
        <div>
          <h1>Phone</h1>
          <p>+880 1690 143 060</p>
        </div>
        <div>
          <h1>Address</h1>
          <p>Dhaka, Bangladesh</p>
        </div>
        <div>
          <h1>Email</h1>
          <p>khanshakil.official@gmail.com</p>
        </div>
      </div>
      <div>
        <form
          onSubmit={form.handleSubmit((values) => {
            console.log(values);
          })}
          className="space-y-5 mt-4"
        >
          <Grid item xs={12} md={6}>
            <Controller
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="selectLabelId">Name</InputLabel>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                  />
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="selectLabelId">Email</InputLabel>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="email"
                    label="Email"
                    type="text"
                    fullWidth
                  />
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="selectLabelId">Subject</InputLabel>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="subject"
                    label="Subject"
                    type="text"
                    fullWidth
                  />
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Write your opinion/suggestion"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "12px",
              }}
              {...form.register("message")}
            />
          </Grid>
        </form>
      </div>
    </section>
  );
};

export default Contact;
