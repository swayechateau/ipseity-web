<?php

namespace App\Http\Controllers\Api\Resume;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResumeController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {

    return [
      0 => [
        "name" => "main",
        "website" => "https://swayechateau.com",
        "social_links" => [
          [
            "title" => "linkedin.com/in/swayec",
            "icon" => "fab fa-linkedin-in fa-fw",
            "url" => "https://linkedin.com/in/swayec"
          ],
          [
            "title" => "github.com/swayechateau",
            "icon" => "fab fa-github-alt fa-fw",
            "url" => "https://github.com/swayechateau"
          ],
          [
            "title" => "stackoverflow.com/users/12294214",
            "icon" => "fab fa-stack-overflow fa-fw",
            "url" => "https://stackoverflow.com/users/12294214"
          ],
          [
            "title" => "swayechateau.com",
            "icon" => "fas fa-globe",
            "url" => "https://swayechateau.com"
          ]
        ],
        "formats" => ["html", "pdf"],
        "industry" => "Information Technology",
        "translations" => [
          "en-gb" => [
            "profession" => "Full Stack Developer",
            "name" => "Swaye Chateau",
            "carrer_summary" =>  "The first half of Career was split between IT support, Systems Administration and Network Engineering, I have over 10 years experince working with computers including Mac OS, Linux and Windows. My passion has always been and will always be working with computers, the second half of my Career started when I went uni in 2015 and bloomed when I got my first software development contract for Dimension Data. Since then, I have had 3 years experience in business managment and 2 years experince in the field as a software developer.",
            "work_experience" => [
              [
                "position" => "Full Stack Developer",
                "company" => "KiTech Software",
                "started" => "12/2016",
                "left" => "",
                "summary" => "As the Sole Director and Developer at KiTech Software, my responsibilties were vast, from managing the company to building websites for the company and clients. I have worked with multiple technologise as a result of customer demand or trailing for use within KiTech Software. Due to some NDA's signed I can not go into detail on alot of client projects, but I can on company and residential projects ",
                "responsibilities" => [],
                "tools" => [
                  "Vue JS / React",
                  "HTML / SASS / JavaScript",
                  "MSSql / Mysql / PostgresSQL",
                  "Grunt / Babel / Webpack",
                  "Jenkins / Gitlab / Mattermost",
                  "Node.js / MongoDB",
                  "Php / Laravel / Lumen",
                  "Pheonix / Elixir",
                  "Electron",
                  "Socket I.O"
                ]
              ],
              [
                "position" => "Network Engineer",
                "company" => "(Contractor) CoVue",
                "started" => "10/2016 ",
                "left" => "11/2016 ",
                "summary" => "My job was to help upgrade three schools network system, label up the ports and neaten the RJ45 cables to the switch in the server room, to increase manageability. I was also tasked with keeping an eye on system backup and remedying any irregularities that appeared.",
                "responsibilities" => []
              ],
              [
                "position" => "2nd Line Helpdesk Support",
                "company" => "(Contractor) Rey&Rey",
                "started" => "08/2016 ",
                "left" => "10/2016 ",
                "summary" => "My job was to help upgrade three schools network system, label up the ports and neaten the RJ45 cables to the switch in the server room, to increase manageability. I was also tasked with keeping an eye on system backup and remedying any irregularities that appeared.",
                "responsibilities" => []
              ],
              [
                "position" => "Residential Telecoms Engineer ",
                "company" => "(Contractor) McNicholas",
                "started" => "05/2016 ",
                "left" => "08/2016 ",
                "summary" => "As a Residential Telecoms Engineer for McNicholas, working in partnership on the Virgin Media, I provided broadband, TV and telephone installs and repairs to customers’ homes throughout South London such as Sutton, Epsom, Croydon, Belmont and Kingston Upon Thames, to name a few."
              ],
              [
                "position" => "IT Support Technician",
                "company" => "(Temporary) Samaritans",
                "started" => "07/2013 ",
                "left" => "12/2014 ",
                "summary" => "As an IT Support assistant I managed anything IT related, such as take list of stock and machine locations. Test and evaluate connect and earmail I have used Linux and windows in order to accomplish my general work tasks.",
                "responsibilities" => [
                  "Manage active directory and exchange",
                  "Set up, update and educate users on Audio/Visual equipment.",
                  "Create user friendly guides on how to use applications and hardware.",
                  "Provide remote support to branches regional director’s trustees via phone and Team Viewer.",
                  "Set group policies and local security policies",
                  "Create and image work machine’s (Desktops and Laptops).",
                  "Purchasing and working to budgets",
                  "Project planning"
                ]
              ],
              [
                "position" => "UniFlow Technology Specialist",
                "company" => "(Temporary) Canon UK",
                "started" => "07/2012 ",
                "left" => "01/2013 ",
                "summary" => "As a Technology Specialist I had to provide first/second line incident/problem management for all Canon software solutions to all our contracted customers, Partner channel and internal support personnel.",
                "responsibilities" => [
                  "Diagnose and resolve technical software and driver issues",
                  "Log all help desk interactions within Incident management system",
                  "Keep up-to-date with software, system information, changes and updates.",
                  "Utilize and update knowledge base",
                  "Utilize VPN / remote access solutions such as WebEx",
                  "Provide support and update my knowledge on Audio/Visual equipment, Siebel, MFP I-Features, MEAP, iW360, UniFLOW, MPS Software and Utilities and Basic Fiery Controllers."
                ]
              ]
            ],
            "skills" => [
              "frontend" =>
              [
                "Vue Js",
                "React",
                "Javascript",
                "HTML",
                "CSS3/SASS/LESS/STYLUS",

              ],
              "backend" =>
              [
                "Node.js",
                "Java",
                "Python/Django",
                "Ruby/Rails",
                "Elixir/Pheonix",
                "PHP/Laravel/Lumen/WordPress",
              ],
              "other" => [
                "DevOps",
                "Git",
                "Gitlab",
                "Confluence",
                "BitBucket",
                "Jira",
                "Docker",
                "Jenkins",
                "Unit Testing",
                "Slack",
                "Ms Bot Framework",
                "Dialog Flow",
                "Java",
                "Wireframing",
                "Electron",
                "Centos",
                "Ubuntu",
                "Windows"
              ]
            ],
            "featured_projects" => [
              [
                "url" => "",
                "name" => "Biscord",
                "description" => "A far surprioir version to discord with more security and pleasing support"
              ],
              [
                "url" => "",
                "name" => "Vs Social",
                "description" => "Competitive gaming has neve been as good as this before"
              ],
              [
                "url" => "",
                "name" => "Ride dat Camal",
                "description" => "A simple 2d crossplatform game"
              ]
            ],
            "education" => [
              [
                "school" => "GSM London",
                "subject" => "BSc Computer Science",
                "started" => "2015",
                "finished" => "2017"
              ],
              [
                "school" => "Harvard University",
                "subject" => "CS50",
                "started" => "2019",
                "finished" => ""
              ]
            ],
            "languages" => [
              [
                "flag" => "🇬🇧",
                "name" => "English",
                "mastery" => "native"
              ],
              [
                "flag" => "🇫🇷",
                "name" => "French",
                "mastery" => "novice"
              ],
              [
                "flag" => "🇯🇵",
                "name" => "Japanese",
                "mastery" => "novice"
              ],
              [
                "flag" => "🇨🇳",
                "name" => "Chineses",
                "mastery" => "novice"
              ]
            ],
            "interests" => [
              "Machine Learning",
              "Business",
              "Kendo",
              "Parkour",
              "Technology",
              "Finance",
              "Time Management"
            ]
          ]
        ]
      ]
    ];
  }
}
