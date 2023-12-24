"use client";

import Link from "next/link";
import React from "react";

function NaChaiClient() {
  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-4xl font-bold mt-6 lg:mt-4  text-center">Благодарим вас за пожертвование!</h1>
      <p className="text-lg max-w-2xl text-center mt-2">Мы вам очень благодарны! Данные средства помогут нам стать еще лучше!</p>

      <Link className="btn btn-secondary text-white mt-10 mb-12" href="/">
        На главную
      </Link>
    </div>
  );
}

export default NaChaiClient;
