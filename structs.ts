export interface Note {
  id: string;
  title: string;
  body: string;
  dateCreated: string;
}

export interface InboxItem {
  id: string;
  sender: string;
  senderName: string;
  recipient: string;
  subject: string | Mail["subject"];
  preview: string;
  dateCreated: string | any | Mail["dateCreated"];
  seen: boolean;
  type?: "notification" | "subscription";
}

export interface Mail {
  id: string | number | any;
  sender: string;
  recipient: string | User;
  subject: string;
  body: string;
  dateCreated: any;
  sign: string | any;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
}
