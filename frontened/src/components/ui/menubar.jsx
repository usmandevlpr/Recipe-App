// import * as React from "react"
// import * as MenubarPrimitive from "@radix-ui/react-menubar"
// import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

// import { cn } from "@/lib/utils"

// function Menubar({
//   className,
//   ...props
// }) {
//   return (
//     (<MenubarPrimitive.Root
//       data-slot="menubar"
//       className={cn(
//         "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
//         className
//       )}
//       {...props} />)
//   );
// }

// function MenubarMenu({
//   ...props
// }) {
//   return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
// }




// function MenubarTrigger({
//   className,
//   ...props
// }) {
//   return (
//     (<MenubarPrimitive.Trigger
//       data-slot="menubar-trigger"
//       className={cn(
//         "click:bg-accent click:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
//         className
//       )}
//       {...props} />)
//   );
// }

// function MenubarContent({
//   className,
//   align = "start",
//   alignOffset = -4,
//   sideOffset = 8,
//   ...props
// }) {
//   return (
//     (
//       <MenubarPrimitive.Content
//         data-slot="menubar-content"
//         align={align}
//         alignOffset={alignOffset}
//         sideOffset={sideOffset}
//         className={cn(
//           "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
//           className
//         )}
//         {...props} />
//     )
//   );
// }


















// export {
//   Menubar,
//   // MenubarPortal,
//   MenubarMenu,
//   MenubarTrigger,
//   MenubarContent,
 
// }




import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Menubar({ className, ...props }) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  );
}
function MenubarMenu({
  ...props
}) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return (
    (
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
          className
        )}
        {...props} />
  )
  );
}

function MenubarTrigger({ className, onClick, ...props }) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
     className={cn(
            "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className
          )}
      onClick={onClick} // Add the onClick handler here
      {...props}
    />
  );
}


export {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  // MenubarPortal,
  MenubarMenu,
};