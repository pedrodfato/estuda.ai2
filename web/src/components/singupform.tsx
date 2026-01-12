import React from 'react';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SingupForm() {
  return(
    <>
      <FieldSet className="w-full flex flex-col">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Estudai" />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" placeholder="••••••••" />
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
          </Field>
        </FieldGroup>
        <Button>Login</Button>
      </FieldSet>
    </>
  )
}
