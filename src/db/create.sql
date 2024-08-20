CREATE TABLE Classes (
    class_id SERIAL PRIMARY KEY,
    class_name VARCHAR(255) NOT NULL
);

CREATE TABLE Units (
    unit_id SERIAL PRIMARY KEY,
    class_id INT REFERENCES Classes(class_id),
    unit_number VARCHAR(50),
    unit_title VARCHAR(255)
);

CREATE TABLE Sections (
    section_id SERIAL PRIMARY KEY,
    unit_id INT REFERENCES Units(unit_id),
    section_number VARCHAR(50),
    section_title VARCHAR(255)
);

CREATE TABLE Subsections (
    subsection_id SERIAL PRIMARY KEY,
    section_id INT REFERENCES Sections(section_id),
    subsection_number VARCHAR(50),
    subsection_title VARCHAR(255)
);

CREATE TABLE Terms (
    term_id SERIAL PRIMARY KEY,
    subsection_id INT REFERENCES Subsections(subsection_id),
    term VARCHAR(255) NOT NULL,
    definition TEXT NOT NULL
);
