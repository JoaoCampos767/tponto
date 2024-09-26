"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function VerifyCode() {
  const router = useRouter();

  function handleVerifyCode() {
    router.push("/reset-password");
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6 py-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Verificar Código</h1>
          <p className="text-muted-foreground">
            Digite o código de autenticação enviado para seu e-mail para
            redefinir sua senha.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-center">
            <InputOTP maxLength={6} pattern="^[0-9]+$">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <Button type="submit" className="w-full" onClick={handleVerifyCode}>
            Verificar
          </Button>
        </div>
      </div>
    </div>
  );
}
