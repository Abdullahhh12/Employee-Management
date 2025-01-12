const employees = [
    {
        "id": 1,
        "name": "John",
        "email": "emp@me.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "completed": 1,
            "new": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Create YouTube Video",
                "description": "Record and edit a tutorial on using the company software.",
                "category": "Content Creation",
                "date": "2025-01-09",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Design a Website",
                "description": "Create a landing page for the marketing campaign.",
                "category": "Web Development",
                "date": "2025-01-08",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane",
        "email": "jane@me.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "completed": 1,
            "new": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Connect Domain to Website",
                "description": "Link the client's domain to the newly designed website.",
                "category": "IT Operations",
                "date": "2025-01-06",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Create Marketing Plan",
                "description": "Develop a detailed strategy for the upcoming product launch.",
                "category": "Marketing",
                "date": "2025-01-05",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Mike",
        "email": "mike@me.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "completed": 0,
            "new": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Set Up Email Campaign",
                "description": "Create and schedule an automated email sequence for new leads.",
                "category": "Marketing",
                "date": "2025-01-04",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update Website UI",
                "description": "Enhance the user interface for better accessibility.",
                "category": "Web Development",
                "date": "2025-01-03",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Emily",
        "email": "emily@me.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "completed": 0,
            "new": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Conduct Team Meeting",
                "description": "Organize and lead a meeting to discuss project progress.",
                "category": "Management",
                "date": "2025-01-02",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Review Security Logs",
                "description": "Check logs for potential vulnerabilities and threats.",
                "category": "IT Operations",
                "date": "2025-01-01",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Chris",
        "email": "chris@me.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "completed": 1,
            "new": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Prepare Monthly Report",
                "description": "Compile and analyze performance metrics for December.",
                "category": "Documentation",
                "date": "2025-01-01",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Create Presentation Slides",
                "description": "Design and prepare slides for the upcoming client meeting.",
                "category": "Presentation",
                "date": "2024-12-31",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
  ];
  

const admin = [
    {
        "id": 1,
        "name": "Admin",
        "email": "admin@me.com",
        "password": "123"  
    }
]
  
        
  export const setLocalStorage =()=>{
      localStorage.setItem('employees',JSON.stringify(employees))
    //   localStorage.setItem('admin',JSON.stringify(admin))
  }
  
  export const getLocalStorage =()=>{
      const employees = JSON.parse(localStorage.getItem('employees'));  
    //   const admin = JSON.parse(localStorage.getItem('admin'));  
      return employees;
  
  }
    
  
  