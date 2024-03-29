"use server";

import { TCAppointment } from "@/types";
import { ZCAppointment } from "@/validator";
import { google } from "googleapis";

const sheets = google.sheets({
  version: "v4",
  auth: new google.auth.GoogleAuth({
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  }),
});

const spreadsheetId = process.env.GOOGLE_SHEET_ID;

export const appointSave = async (payload: TCAppointment) => {
  const validateData = ZCAppointment.parse(payload);

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "PortfolioMessage!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            validateData.name,
            validateData.email,
            validateData.subject,
            validateData.message,
          ],
        ],
      },
    });
    return "Message Send Successfully";
  } catch (err) {
    console.log(err);
    return "Connection Error! Please try again later";
  }
};
