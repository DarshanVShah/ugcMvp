"use client";

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
}

export function WaitlistForm({
  variant = "dark",
  buttonLabel = "Join waitlist",
}: {
  variant?: "dark" | "light";
  buttonLabel?: string;
}) {
  const isDark = variant === "dark";
  return (
    <form
      className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="you@example.com"
        className={
          isDark
            ? "rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            : "rounded-lg border border-brand-sand bg-white px-4 py-3 text-brand-green placeholder:text-brand-green/40 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        }
      />
      <button
        type="submit"
        className={
          isDark
            ? "btn-primary shrink-0"
            : "btn-primary shrink-0"
        }
      >
        {buttonLabel}
      </button>
    </form>
  );
}
