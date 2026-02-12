import { X, Minus, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface ComposeModalProps {
  open: boolean;
  onClose: () => void;
}

const ComposeModal = ({ open, onClose }: ComposeModalProps) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  if (!open) return null;

  const handleSend = () => {
    onClose();
    setTo('');
    setSubject('');
    setBody('');
  };

  return (
    <div className="fixed bottom-0 right-6 w-[520px] bg-compose-bg rounded-t-xl shadow-2xl border border-border z-50 flex flex-col max-h-[70vh]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50 rounded-t-xl">
        <span className="text-sm font-semibold text-foreground">New Message</span>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-muted transition-colors">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-1 rounded hover:bg-muted transition-colors">
            <Maximize2 className="w-4 h-4 text-muted-foreground" />
          </button>
          <button onClick={onClose} className="p-1 rounded hover:bg-muted transition-colors">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Fields */}
      <div className="border-b border-border">
        <div className="flex items-center px-4 py-2 border-b border-border/50">
          <span className="text-sm text-muted-foreground w-12">To</span>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50"
            placeholder="Recipients"
          />
        </div>
        <div className="flex items-center px-4 py-2">
          <span className="text-sm text-muted-foreground w-12">Subject</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50"
            placeholder="Subject"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-4 min-h-[200px]">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full h-full text-sm bg-transparent outline-none resize-none text-foreground placeholder:text-muted-foreground/50 min-h-[180px]"
          placeholder="Write your message..."
        />
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border flex items-center justify-between">
        <button
          onClick={handleSend}
          className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Send
        </button>
        <button onClick={onClose} className="p-2 rounded hover:bg-muted transition-colors">
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ComposeModal;
