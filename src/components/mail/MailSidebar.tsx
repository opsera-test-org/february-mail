import { Inbox, Send, FileText, Star, Trash2, PenSquare } from 'lucide-react';

export type Folder = 'inbox' | 'sent' | 'drafts' | 'starred' | 'trash';

interface MailSidebarProps {
  activeFolder: Folder;
  onFolderChange: (folder: Folder) => void;
  onCompose: () => void;
  counts: Record<Folder, number>;
}

const folders: { id: Folder; label: string; icon: React.ElementType }[] = [
  { id: 'inbox', label: 'Inbox', icon: Inbox },
  { id: 'starred', label: 'Starred', icon: Star },
  { id: 'sent', label: 'Sent', icon: Send },
  { id: 'drafts', label: 'Drafts', icon: FileText },
  { id: 'trash', label: 'Trash', icon: Trash2 },
];

const MailSidebar = ({ activeFolder, onFolderChange, onCompose, counts }: MailSidebarProps) => {
  return (
    <aside className="w-56 shrink-0 bg-sidebar text-sidebar-foreground flex flex-col h-full border-r border-sidebar-border">
      <div className="p-4">
        <h1 className="text-lg font-semibold text-sidebar-accent-foreground tracking-tight">
          feb mail
        </h1>
      </div>

      <div className="px-3 mb-4">
        <button
          onClick={onCompose}
          className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <PenSquare className="w-4 h-4" />
          Compose
        </button>
      </div>

      <nav className="flex-1 px-2 space-y-0.5">
        {folders.map(({ id, label, icon: Icon }) => {
          const isActive = activeFolder === id;
          const unread = counts[id];
          return (
            <button
              key={id}
              onClick={() => onFolderChange(id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">{label}</span>
              {unread > 0 && (
                <span className={`text-xs tabular-nums ${isActive ? 'text-sidebar-accent-foreground' : 'text-sidebar-muted'}`}>
                  {unread}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-sidebar-primary/20 flex items-center justify-center text-xs font-semibold text-sidebar-primary">
            FM
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-sidebar-accent-foreground truncate">Feb User</p>
            <p className="text-xs text-sidebar-muted truncate">me@febmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MailSidebar;
