export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const users: IUser[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoegmail.com",
    password: "password",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    password: "password123",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alicejohnson@gmail.com",
    password: "alicepass",
  },
  {
    id: "4",
    name: "Bob Brown",
    email: "bobbrown@gmail.com",
    password: "bobpassword",
  },
  {
    id: "5",
    name: "Charlie Davis",
    email: "charliedavis@gmail.com",
    password: "charlie123",
  },
  {
    id: "6",
    name: "Diana Evans",
    email: "dianaevans@gmail.com",
    password: "diana456",
  },
  {
    id: "7",
    name: "Eve Foster",
    email: "evefoster@gmail.com",
    password: "evepassword",
  },
  {
    id: "8",
    name: "Frank Green",
    email: "frankgreen@gmail.com",
    password: "frankpass",
  },
  {
    id: "9",
    name: "Grace Harris",
    email: "graceharris@gmail.com",
    password: "grace123",
  },
  {
    id: "10",
    name: "Hank Irving",
    email: "hankirving@gmail.com",
    password: "hankpassword",
  },
  {
    id: "11",
    name: "Ivy Johnson",
    email: "ivyjohnson@gmail.com",
    password: "ivypass",
  },
];

export const addUser = (user: IUser) => {
  const existingUser = users.find(
    (u) => u.email === user.email && u.password === user.password
  );
  if (!existingUser) {
    users.push(user);
  }
};

export const findUser = (id: string) => {
  return users.find((user) => user.id === id);
};

export const findUserByEmailAndPassword = (email: string, password: string) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};

export const deleteUser = (id: string) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
};
