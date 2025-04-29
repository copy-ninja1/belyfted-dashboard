export interface IUser {
  fullName: string;
  emailAddress: string;
  dateCreated: string;
  status: "Active" | "Inactive";
  role: string;
}
