import React from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

function GetInTouchForm() {
  return (
    <form>
      <Input
        type="name"
        placeholder="Name"
        className="rounded-none border-4 border-white mb-2"
      />
      <Input
        type="email"
        placeholder="Email"
        className="rounded-none border-4 border-white mb-2"
      />
      <Textarea
        placeholder="Comments"
        className="rounded-none border-4 border-white mb-2"
      />

      <Button
        type="button"
        variant={"outline"}
        className="rounded-none w-full text-black"
      >
        Submit
      </Button>
    </form>
  );
}

export default GetInTouchForm;
