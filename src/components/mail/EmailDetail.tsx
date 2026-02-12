import { Reply, Forward, MoreHorizontal, Star, Archive, Trash2 } from 'lucide-react';
import { Email } from '@/data/mockEmails';
import { format } from 'date-fns';

interface EmailDetailProps {
  email: Email | null;
}

const EmailDetail = ({ email }: EmailDetailProps) => {
  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">Select a message to read</p>
        </div>
      </div>
    );
  }

  const initials = email.from.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="flex-1 flex flex-col bg-background h-full overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Reply className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Forward className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Archive className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Trash2 className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Star className={`w-4 h-4 ${email.starred ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'}`} />
          </button>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Email content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-6">
        <h1 className="text-xl font-semibold text-foreground mb-6">{email.subject}</h1>

        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-foreground">{email.from.name}</span>
              <span className="text-xs text-muted-foreground">&lt;{email.from.email}&gt;</span>
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              To: {email.to.map(t => t.name).join(', ')} · {format(email.date, 'MMM d, yyyy · h:mm a')}
            </div>
          </div>
        </div>

        <div className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line max-w-2xl">
          {email.body}
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
