"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { HomePage } from "../sections/home";
import { useState } from "react";
import DialogPerfil from "../sections/perfil";
import NotePage from "../sections/note";
import {
  BriefcaseIcon,
  HomeIcon,
  LayoutGridIcon,
  UsersIcon,
} from "@/components/icons";

export default function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [openDialogPerfil, setOpenDialogPerfil] = useState<boolean>(false);

  function handleLogout() {
    router.push("/login");
  }

  const menus = [
    { id: 0, name: "Home", icon: <HomeIcon className="h-5 w-5" /> },
    {
      id: 1,
      name: "Apontamento",
      icon: <LayoutGridIcon className="h-5 w-5" />,
    },
    { id: 2, name: "Customers", icon: <UsersIcon className="h-5 w-5" /> },
    { id: 3, name: "Products", icon: <BriefcaseIcon className="h-5 w-5" /> },
  ];

  function renderPage() {
    switch (currentPage) {
      case "Home":
        return <HomePage />;
      case "Apontamento":
        return <NotePage />;
      case "Customers":
      //return <CustomersPage />;
      case "Products":
      //return <ProductsPage />;
      default:
        return;
    }
  }

  function handleOpenDialogPerfil() {
    setOpenDialogPerfil(true);
  }

  function handleCloseDialogPerfil() {
    setOpenDialogPerfil(false);
  }

  return (
    <>
      <div className="flex min-h-screen w-full">
        <aside className="hidden w-64 flex-col border-r bg-background p-4 sm:flex">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-lg font-semibold">TPonto</span>
          </div>
          <nav className="flex flex-col space-y-1">
            {menus.map((menu) => (
              <button
                key={menu.id}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors 
        ${
          currentPage === menu.name
            ? "bg-muted text-foreground"
            : "hover:bg-muted hover:text-foreground"
        }`}
                onClick={() => setCurrentPage(menu.name)}
              >
                {menu.icon}
                {menu.name}
              </button>
            ))}
          </nav>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-semibold">{currentPage}</h1>
            </div>
            <div className="flex items-center gap-4">
              <Input
                type="search"
                placeholder="Search..."
                className="max-w-xs rounded-md bg-muted px-3 py-2 text-sm"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <img
                      src="/favicon.ico"
                      width={32}
                      height={32}
                      alt="Avatar"
                      className="rounded-full"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Conectado como João</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleOpenDialogPerfil}
                  >
                    Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Configurações
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleLogout}
                  >
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6">{renderPage()}</main>
        </div>
      </div>
      <DialogPerfil
        isOpen={openDialogPerfil}
        onClose={handleCloseDialogPerfil}
      />
    </>
  );
}
