"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();

  function handleCodeEmail() {
    router.push("/verify-code");
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Esqueceu sua senha
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Entre com seu Email para poder redefinir sua senha.
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <Button type="submit" className="w-full" onClick={handleCodeEmail}>
              Resetar senha
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Link
            href="/login"
            className="font-medium text-primary hover:text-primary-foreground"
            prefetch={false}
          >
            Voltar ao Login
          </Link>
        </div>
      </div>
    </div>
  );
}
