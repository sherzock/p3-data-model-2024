import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

async function main() {
  const student1 = await db.person.create({
    data: {
      firstName: "Jacob",
      lastName: "Galofre Calbeto",
      email: "jacobo.galofre@test.com",
      role: "STUDENT",
    },
  });

  const student2 = await db.person.create({
    data: {
      firstName: "Bilbo",
      lastName: "Baggins",
      email: "bilbo.baggins@test.com",
      role: "STUDENT",
    },
  });
  const student3 = await db.person.create({
    data: {
      firstName: "Frodo",
      lastName: "Baggins",
      email: "frodo.baggins@test.com",
      role: "STUDENT",
    },
  });
  const student4 = await db.person.create({
    data: {
      firstName: "Samwise",
      lastName: "Gamgee",
      email: "samwise.gamgee@test.com",
      role: "STUDENT",
    },
  });
  const student5 = await db.person.create({
    data: {
      firstName: "Meriadoc",
      lastName: "Brandybuck",
      email: "meriadoc.brandybuck@test.com",
      role: "STUDENT",
    },
  });
  const student6 = await db.person.create({
    data: {
      firstName: "Gandalf",
      lastName: "The Grey",
      email: "gandalf.thegrey@test.com",
      role: "STUDENT",
    },
  });
  const student7 = await db.person.create({
    data: {
      firstName: "Aragorn",
      lastName: "Telcontar",
      email: "aragorn.telcontar@test.com",
      role: "STUDENT",
    },
  });
  const student8 = await db.person.create({
    data: {
      firstName: "Legolas",
      lastName: "Greenleaf",
      email: "legolas.greenleaf@test.com",
      role: "STUDENT",
    },
  });
  const student9 = await db.person.create({
    data: {
      firstName: "Gimli",
      lastName: "son of Gloin",
      email: "gimli.sonofgloin@test.com",
      role: "STUDENT",
    },
  });
  const student10 = await db.person.create({
    data: {
      firstName: "Boromir",
      lastName: "son of Denethor",
      email: "boromir.sonofdebethor@test.com",
      role: "STUDENT",
    },
  });
  const student11 = await db.person.create({
    data: {
      firstName: "Lobelia",
      lastName: "Sacksville Baggins",
      email: "lobelia.sacksville@test.com",
      role: "STUDENT",
    },
  });
  const student12 = await db.person.create({
    data: {
      firstName: "Otho",
      lastName: "Sacksville Baggins",
      email: "Otho.Sacksville@test.com",
      role: "STUDENT",
    },
  });
  const student13 = await db.person.create({
    data: {
      firstName: "Thorin",
      lastName: "Oakenshield",
      email: "thorin.oakenshield@test.com",
      role: "STUDENT",
    },
  });
  const student14 = await db.person.create({
    data: {
      firstName: "Belladonna",
      lastName: "Took",
      email: "belladonna.took@test.com",
      role: "STUDENT",
    },
  });
  const student15 = await db.person.create({
    data: {
      firstName: "Tom",
      lastName: "Bombadil",
      email: "tom.bombadil@test.com",
      role: "STUDENT",
    },
  });
  const student16 = await db.person.create({
    data: {
      firstName: "Berylla",
      lastName: "Boffin",
      email: "berylla.boffin@test.com",
      role: "STUDENT",
    },
  });
  const student17 = await db.person.create({
    data: {
      firstName: "Linda",
      lastName: "Baggins",
      email: "linda.baggins@test.com",
      role: "STUDENT",
    },
  });
  const student18 = await db.person.create({
    data: {
      firstName: "Primula",
      lastName: "Brandybuck",
      email: "primula.brandybuck@test.com",
      role: "STUDENT",
    },
  });

  const student19 = await db.person.create({
    data: {
      firstName: "John",
      lastName: "Ronald Reuel Tolkien",
      email: "JRR.tolkien@test.com",
      role: "STUDENT",
    },
  });

  const student20 = await db.person.create({
    data: {
      firstName: "Edith",
      lastName: "Mary Tolkien",
      email: "edith.tolkien@test.com",
      role: "STUDENT",
    },
  });

  console.log(
    "You created students:",
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
    student8,
    student9,
    student10,
    student11,
    student12,
    student13,
    student14,
    student15,
    student16,
    student17,
    student18,
    student19,
    student20
  );
}

const Teacher1 = await db.person.create({
  data: {
    firstName: "Harry",
    lastName: "Potter",
    email: "harry.potter@test.com",
    role: "TEACHER",
  },
});

const Teacher2 = await db.person.create({
  data: {
    firstName: "Hermione",
    lastName: "Granger",
    email: "hermione.granger@test.com",
    role: "TEACHER",
  },
});

const Teacher3 = await db.person.create({
  data: {
    firstName: "Ronald",
    lastName: "Weasly",
    email: "ronald.weasly@test.com",
    role: "TEACHER",
  },
});

const Teacher4 = await db.person.create({
  data: {
    firstName: "Albus",
    lastName: "Dumbeldore",
    email: "albus.dumbelodre@test.com",
    role: "TEACHER",
  },
});

const Teacher5 = await db.person.create({
  data: {
    firstName: "Severus",
    lastName: "Snape",
    email: "severus.snape@test.com",
    role: "TEACHER",
  },
});

console.log(
  "You created teacdhers:",
  Teacher1,
  Teacher2,
  Teacher3,
  Teacher4,
  Teacher5
);

const Classroom1 = await db.classroom.create({
  data: {
    name: "A1",
    capacity: 20,
    location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
  },
});

const Classroom2 = await db.classroom.create({
  data: {
    name: "A2",
    capacity: 35,
    location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
  },
});

const Classroom3 = await db.classroom.create({
  data: {
    name: "A3",
    capacity: 55,
    location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
  },
});

const Classroom4 = await db.classroom.create({
  data: {
    name: "B1",
    capacity: 12,
    location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
  },
});

const Classroom5 = await db.classroom.create({
  data: {
    name: "B2",
    capacity: 30,
    location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
  },
});

const Classroom6 = await db.classroom.create({
  data: {
    name: "B3",
    capacity: 44,
    location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
  },
});

const Classroom7 = await db.classroom.create({
  data: {
    name: "Online1",
    url: "meet.google.com/test1",
  },
});

const Classroom8 = await db.classroom.create({
  data: {
    name: "Online2",
    url: "meet.google.com/test2",
  },
});

const Classroom9 = await db.classroom.create({
  data: {
    name: "Online2",
    url: "meet.google.com/test3",
  },
});

const Classroom10 = await db.classroom.create({
  data: {
    name: "Auditorium",
    capacity: 300,
    location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
  },
});

console.log(
  "Classrooms created:",
  Classroom1,
  Classroom2,
  Classroom3,
  Classroom4,
  Classroom5,
  Classroom6,
  Classroom7,
  Classroom8,
  Classroom9,
  Classroom10
);



await main();
