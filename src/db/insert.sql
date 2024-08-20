INSERT INTO Classes (class_name)
VALUES ('Class Name')
RETURNING class_id;

INSERT INTO Units (class_id, unit_number, unit_title)
VALUES (CLASS_ID_VALUE, '1', 'Unit Name')
RETURNING unit_id;

INSERT INTO Sections (unit_id, section_number, section_title)
VALUES (UNIT_ID_VALUE, '1', 'Section Name')
RETURNING section_id;

INSERT INTO Subsections (section_id, subsection_number, subsection_title)
VALUES (SECTION_ID_VALUE, '1', 'Subsection Name')
RETURNING subsection_id;

INSERT INTO Terms (subsection_id, term, definition)
VALUES (SUBSECTION_ID_VALUE, 'Term', 'Definition');






--UNITS
-- INSERT INTO Units (class_id, unit_number, unit_title)
-- VALUES ('1', '1', 'Networking Basics'),
-- ('1', '2', 'TCP/IP Protocol Suite '),
-- ('1', '3', 'Wireless and Wide Area Networks '),
-- ('1', '4', 'Network Security and Troubleshooting ');

--SECTIONS
-- INSERT INTO Sections (unit_id, section_number, section_title)
-- VALUES ('1', '1', 'Introduction to Networks and OSI Model'),
-- ('1', '2', 'Networking Physical Media and Wiring Standards'),
-- ('1', '3', 'Ethernet Specifications'),
-- ('1', '4', 'Networking Devices'),

--SUBSECTIONS
-- INSERT INTO Subsections (section_id, subsection_number, subsection_title)
-- VALUES ('1', '1', 'Introduction to Networking'),
-- ('1', '2', 'Types of Networks'),
-- ('1', '3', 'Common Network Topologies'),
-- ('1', '4', 'OSI Reference Model - Upper Layers'),
-- ('1', '5', 'OSI Reference Model - Lower Layers'),

--TERMS
-- INSERT INTO Terms (subsection_id, term, definition)
-- VALUES (SUBSECTION_ID_VALUE, 'Term', 'Definition');


INSERT INTO Subsections (section_id, subsection_number, subsection_title)
VALUES ('9', '1', 'Wireless and Cellular Technologies'),
('9', '2', 'The 802.11 Standards'),
('9', '3', 'Wireless Networking Components'),
('10', '1', 'Site Survey and Installation Configurations'),
('10', '2', 'Installing WLAN Networks'),
('10', '3', 'Wireless Security'),
('11', '1', 'Wide Area Networks'),
('11', '2', 'Connection & Transmission Media'),
('11', '3', 'Broadband & Wireless Technologies'),
('12', '1', 'ISDN & Frame Relay'),
('12', '2', 'PPP, ATM, DMVPN, SIP Trunks, & MPLS'),
('13', '1', 'Security Filtering—Access Control Lists and VPN'),
('13', '2', 'Security Filtering—Encryption and Remote Access'),
('13', '3', 'User Account and Password Security'),
('13', '4', 'User Authentication Methods'),
('14', '1', 'Common Security Threats'),
('14', '2', 'Network Vulnerabilities'),
('14', '3', 'Mitigation Techniques'),
('14', '4', 'Network Security Policies & Procedures'),
('14', '5', 'Anti-Malware/Anti-Virus Programs'),
('15', '1', 'Firewall Technologies'),
('15', '2', 'Firewall Features and Functions'),
('15', '3', 'Network Physical Security'),
('15', '4', 'Security Configurations and Network Risk Mitigation'),
('16', '1', 'Network Troubleshooting Tools'),
('16', '2', 'Network Scanning, Monitoring, and Patching'),
('16', '3', 'Network Troubleshooting Methodology'),
('16', '4', 'Troubleshooting Wired Networks'),
('16', '5', 'Troubleshooting Wireless Networks'),
('17', '1', 'Network Infrastructure Components'),
('17', '2', 'Network Scanning Software'),
('17', '3', 'Network Monitoring and Logging Software'),
('17', '4', 'Network Management Tools'),
('17', '5', 'Hardware Tools for Network Management'),
('17', '6', 'Network Optimization Strategies'),
('18', '1', 'Managing Network Documentation'),
('18', '2', 'Policies and Procedures'),
('18', '3', 'Safety'),
('18', '4', 'Change Management');