"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const INACTIVITY_TIME = 600 * 1000; // 10 min
const COUNTDOWN_TIME = 30; // 30 seconds

const InactivityMonitor = () => {
  const { data: session } = useSession(); // Get session data
  const [isInactive, setIsInactive] = useState(false);
  const [countdown, setCountdown] = useState(COUNTDOWN_TIME);
  const router = useRouter()
  let activityTimeout: NodeJS.Timeout;
  let countdownInterval: NodeJS.Timeout;

  // Function to reset inactivity timer
  const resetTimer = () => {
    if (!session) return; // Do nothing if no active session

    clearTimeout(activityTimeout);
    clearInterval(countdownInterval);
    setIsInactive(false);
    setCountdown(COUNTDOWN_TIME);
    startInactivityTimer();
  };

  // Start the inactivity timer
  const startInactivityTimer = () => {
    if (!session) return; // Do not track if user is logged out

    activityTimeout = setTimeout(() => {
      setIsInactive(true);
      startCountdown();
    }, INACTIVITY_TIME);
  };

  // Countdown function
  const startCountdown = () => {
    let timeLeft = COUNTDOWN_TIME;
    countdownInterval = setInterval(() => {
      if (timeLeft <= 1) {
        clearInterval(countdownInterval);
        setIsInactive(false); // Hide modal
        signOut(); // Logout user
        router.refresh()
      }
      setCountdown(timeLeft - 1);
      timeLeft--;
    }, 1000);
  };

  // Handle user activity
  useEffect(() => {
    if (!session) return; // Only track if a user is logged in

    startInactivityTimer();
    

    const activityEvents = ["mousemove", "keydown", "scroll", "click"];
    activityEvents.forEach((event) => document.addEventListener(event, resetTimer));

    return () => {
      activityEvents.forEach((event) => document.removeEventListener(event, resetTimer));
      clearTimeout(activityTimeout);
      clearInterval(countdownInterval);
    };
  }, [session]); // Only run when session changes

  if (!session) return null; // Do not render if user is not logged in

  return (
    <Dialog open={isInactive}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Session Expiring</DialogTitle>
        </DialogHeader>
        <p>You have been inactive. You will be logged out in {countdown} seconds.</p>
        <Button onClick={resetTimer}>Stay Logged In</Button>
      </DialogContent>
    </Dialog>
  );
};

export default InactivityMonitor;
