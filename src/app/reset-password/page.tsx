"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();

  function handleResetPassword() {
    router.push("/login");
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6 py-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Redifir senha</h1>
          <p className="text-muted-foreground">
            Digite uma nova senha e confirme-a para atualizar sua conta.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              id="password"
              type="password"
              placeholder="Digite sua nova senha"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Corfirme sua nova senha"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            onClick={handleResetPassword}
          >
            Alterar senha
          </Button>
        </div>
      </div>
    </div>
  );
}
