export const projects = [
    {
      title: "Web Scraper",
      description: "A Python-based web scraper for extracting data from e-commerce sites.",
      code: `import requests
  from bs4 import BeautifulSoup
  
  url = 'https://example.com'
  response = requests.get(url)
  soup = BeautifulSoup(response.text, 'html.parser')
  print(soup.title.text)`,
      repoLink: "https://github.com/your-repo/web-scraper",
      technologies: [
        { name: "Python", icon: "/icons/python.png" },
        { name: "Selenium", icon: "/icons/selenium.png" },
        { name: "Requests", icon: "/icons/requests.png" }
      ]
    },
    {
      title: "Automated Report Generator",
      description: "Generates PDF reports using Python and Pandas.",
      code: `import pandas as pd
  from fpdf import FPDF
  
  data = pd.DataFrame({'Name': ['Alice', 'Bob'], 'Score': [90, 85]})
  pdf = FPDF()
  pdf.add_page()
  pdf.set_font('Arial', 'B', 16)
  pdf.cell(40, 10, 'Student Scores')
  pdf.output('report.pdf')`,
      repoLink: "https://github.com/your-repo/report-generator",
      technologies: [
        { name: "Python", icon: "/icons/python.png" },
        { name: "Pandas", icon: "/icons/pandas.png" },
        { name: "FPDF", icon: "/icons/fpdf.png" }
      ]
    }
  ];
  