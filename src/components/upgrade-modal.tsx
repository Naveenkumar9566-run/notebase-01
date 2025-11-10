"use client";

import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
 } from "@/components/ui/alert-dialog";
 import { authClient } from "@/lib/auth-client";

 interface UpgradeModalProps {
  open: boolean;
  onOpenChange: (Open: boolean) => void;
 };

 export const UpgradeModal = ({
  open,
  onOpenChange
 } : UpgradeModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Upgrade to pro</AlertDialogTitle>
          <AlertDialogDescription>
             You need an active subscription to perform this acting.
             Upgrade to pro to unlock all feature.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
          onClick={() => authClient.checkout({ slug: "Pro"})}
          >
            Upgrade Now
            </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
 };