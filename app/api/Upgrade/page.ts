import Stripe from 'stripe'

import {db} from '../../utils/Db'
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});


export async function POST(req: Request) {
 
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "INR",
          product_data: {
            name: "10,0000 AI Credit",
            description: "all $10 worth of credit",
          },
          unit_amount: 1000,
        },
      },
    ];

   

    const session = await stripe.checkout.sessions.create({
      // customer: stripeCustomer?.stripeCustomerId,
      line_items,
      mode: "payment",
      success_url: ``,
      cancel_url: ``,
      metadata: {
        userId: userId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Session Error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}