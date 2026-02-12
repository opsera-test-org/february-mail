import { useState, useMemo, useCallback } from 'react';
import MailSidebar, { Folder } from '@/components/mail/MailSidebar';
import EmailList from '@/components/mail/EmailList';
import EmailDetail from '@/components/mail/EmailDetail';
import ComposeModal from '@/components/mail/ComposeModal';
import { mockEmails, Email } from '@/data/mockEmails';

const Index = () => {
  const [activeFolder, setActiveFolder] = useState<Folder>('inbox');
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);

  const filteredEmails = useMemo(() => {
    if (activeFolder === 'starred') return emails.filter(e => e.starred);
    return emails.filter(e => e.folder === activeFolder);
  }, [emails, activeFolder]);

  const selectedEmail = useMemo(
    () => emails.find(e => e.id === selectedId) ?? null,
    [emails, selectedId]
  );

  const counts = useMemo(() => ({
    inbox: emails.filter(e => e.folder === 'inbox' && !e.read).length,
    sent: 0,
    drafts: emails.filter(e => e.folder === 'drafts').length,
    starred: emails.filter(e => e.starred).length,
    trash: emails.filter(e => e.folder === 'trash').length,
  }), [emails]);

  const handleSelect = useCallback((email: Email) => {
    setSelectedId(email.id);
    setEmails(prev => prev.map(e => e.id === email.id ? { ...e, read: true } : e));
  }, []);

  const handleToggleStar = useCallback((id: string) => {
    setEmails(prev => prev.map(e => e.id === id ? { ...e, starred: !e.starred } : e));
  }, []);

  const handleFolderChange = useCallback((folder: Folder) => {
    setActiveFolder(folder);
    setSelectedId(null);
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <MailSidebar
        activeFolder={activeFolder}
        onFolderChange={handleFolderChange}
        onCompose={() => setComposeOpen(true)}
        counts={counts}
      />
      <EmailList
        emails={filteredEmails}
        selectedId={selectedId}
        onSelect={handleSelect}
        onToggleStar={handleToggleStar}
        folderLabel={activeFolder}
      />
      <EmailDetail email={selectedEmail} />
      <ComposeModal open={composeOpen} onClose={() => setComposeOpen(false)} />
    </div>
  );
};

export default Index;
