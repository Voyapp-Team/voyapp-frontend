import { CopyDashboardIcon, ShareDashboardIcon } from "./DashboardIcons";

const contacts = ["M", "A"];

export default function ProfileSummary({ user }) {
  return (
    <section className="mx-2 lg:mx-1" id="profile">
      <div className="rounded-[23px] bg-gradient-to-r from-[#006b5c] to-[#00c2a8] p-[1px] shadow-sm">
        <div className="flex h-full min-h-[120px] flex-col justify-between rounded-[21px] bg-white px-4 py-4 lg:min-h-[120px] lg:px-5 lg:py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#a4a4a4]">
                Personal Profile Link
              </p>
              <p className="mt-2 truncate text-sm font-bold text-[#006b5c] sm:text-base">
                {user.handle}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label="Copy profile link"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f6f3f2] text-[#006b5c] transition hover:bg-[#e7fbf7]"
              >
                <CopyDashboardIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Share profile link"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f6f3f2] text-[#006b5c] transition hover:bg-[#e7fbf7]"
              >
                <ShareDashboardIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-[#f6f3f2] pt-4">
            <div className="flex -space-x-2">
              {contacts.map((contact) => (
                <span
                  key={contact}
                  className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-[#fcf8f8] bg-[#006b5c] text-[10px] font-bold text-white"
                >
                  {contact}
                </span>
              ))}
            </div>
            <p className="text-sm font-medium text-[#3f4a47]">
              Payments this week: $120
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
