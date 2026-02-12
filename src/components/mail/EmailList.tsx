import { Star } from 'lucide-react';
import { Email } from '@/data/mockEmails';
import { formatDistanceToNow } from 'date-fns';

interface EmailListProps {
  emails: Email[];
  selectedId: string | null;
  onSelect: (email: Email) => void;
  onToggleStar: (id: string) => void;
  folderLabel: string;
}

const EmailList = ({ emails, selectedId, onSelect, onToggleStar, folderLabel }: EmailListProps) => {
  return (
    <div className="w-80 shrink-0 border-r border-border bg-card flex flex-col h-full">
      <div className="px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold text-foreground capitalize">{folderLabel}</h2>
        <p className="text-xs text-muted-foreground mt-0.5">{emails.length} messages</p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {emails.length === 0 ? (
          <div className="flex items-center justify-center h-40 text-sm text-muted-foreground">
            No messages
          </div>
        ) : (
          emails.map((email) => {
            const isSelected = email.id === selectedId;
            return (
              <button
                key={email.id}
                onClick={() => onSelect(email)}
                className={`w-full text-left px-4 py-3 border-b border-border/50 transition-colors relative ${
                  isSelected
                    ? 'bg-mail-selected border-l-2 border-l-mail-selected-border'
                    : 'hover:bg-mail-hover border-l-2 border-l-transparent'
                }`}
              >
                <div className="flex items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-sm truncate ${!email.read ? 'font-semibold text-foreground' : 'text-foreground/80'}`}>
                        {email.from.name}
                      </span>
                      <span className="text-[11px] text-muted-foreground shrink-0">
                        {formatDistanceToNow(email.date, { addSuffix: false })}
                      </span>
                    </div>
                    <p className={`text-sm truncate mt-0.5 ${!email.read ? 'font-medium text-foreground' : 'text-foreground/70'}`}>
                      {email.subject}
                    </p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                      {email.preview}
                    </p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleStar(email.id); }}
                    className="mt-0.5 shrink-0"
                  >
                    <Star
                      className={`w-3.5 h-3.5 transition-colors ${
                        email.starred ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/40 hover:text-muted-foreground'
                      }`}
                    />
                  </button>
                </div>
                {!email.read && (
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-mail-unread" />
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default EmailList;
