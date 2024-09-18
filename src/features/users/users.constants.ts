import type { UserBase } from "@/features/users/users.types";
import type { UppercaseObjectKeys } from "@/shared/types";

type BaseUserKey = UppercaseObjectKeys<keyof UserBase>;

const BASE_USER_KEY: BaseUserKey = {
  NAME: "name",
  USERNAME: "username",
  EMAIL: "email",
  PHONE: "phone",
};

export { BASE_USER_KEY };
