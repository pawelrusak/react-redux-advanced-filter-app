import { Id, Address, Company } from "@/shared/types";

type UserId = Id;

type UserProfileName = {
  name: string;
  username: string;
};

type UserContact = {
  phone: string;
  email: string;
};

type UserAddress = {
  address: Address;
};

type UserCompany = {
  company: Company;
};

type UserWebsite = {
  website: string;
};

type User = Id &
  UserProfileName &
  UserContact &
  UserAddress &
  UserCompany &
  UserWebsite;

type UserBase = UserProfileName & UserContact;

export type { User, UserBase, UserId };
