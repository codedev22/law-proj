import blog1img from '../../../assets/blogimages/blogimg1.jpeg'
import blog2img from '../../../assets/blogimages/trademarklaw.jpeg'
import blog3img from '../../../assets/blogimages/FIR.jpeg'
import blog4img from '../../../assets/blogimages/workplaceharassment.jpeg'
import blog5img from '../../../assets/blogimages/representation.jpeg'
import blog6img from '../../../assets/blogimages/tradeconfident.jpeg'
import blog7img from '../../../assets/blogimages/famblogimg.jpeg'
import blog8img from '../../../assets/blogimages/CommercialTransactionsandBusinessDisputes.jpeg'
import blog9img from '../../../assets/blogimages/rentalagreements.jpeg'

export const BlogItems = [
      {
        id: 1,
         blogtype : "row1", 

        blogtitle:
          "CORPORATE COMPLIANCE IN INDIA: KEY LEGAL REQUIREMENTS FOR BUSINESSES",
        blogimg: blog1img,
  
        blogcontent:
          "Running a business in India demands more than a great idea and plan. Compliance with legal and regulatory requirements builds reputation, reduces risks, avoids penalties, and ensures success.",
        bloghref:"/corporate-compliance"  
      },
      {
        id: 2,
        blogtype : "row1", 
        blogtitle:
          "PROTECTING INTELLECTUAL PROPERTY RIGHTS IN INDIA: STRATEGIES AND BEST PRACTICES",
        blogimg: blog2img,
  
        blogcontent:
          "Intellectual Property Rights (IPR) protect creativity, innovation, and brand identity. In India, IPR laws cover trademarks, patents, copyrights, and designs, offering businesses protection and fostering a competitive edge.",
          bloghref:"/ipr-strategies"  
        
        },
      {
        id: 3,
        blogtype : "row1", 
        blogtitle:
          "UNDERSTANDING CRIMINAL LAW PROCEDURES IN INDIA: A GUIDE FOR THE ACCUSED AND VICTIMS",
        blogimg: blog3img,
        bloghref:"/criminal-law-blog",
  
        blogcontent:
          "The criminal justice system in India ensures law, order, and fairness. Understanding legal procedures, from filing an FIR to court trials, is crucial for both accused and victims to navigate the system.",
      },
      {
        id: 4,
        blogtype : "row2", 
        blogtitle:
          "EMPLOYMENT LAWS IN INDIA: RIGHTS AND RESPONSIBILITIES OF EMPLOYERS AND EMPLOYEES",
        blogimg: blog4img,
        bloghref:"/employment-law-blog",
  
        blogcontent:
          "Employment laws in India ensure fair treatment of workers and protect employers' rights. They govern wages, working conditions, benefits, and dispute resolution, fostering a balance.",
      },
      {
        id: 5,
        blogtype : "row2", 
        blogtitle:
          "ARBITRATION IN INDIA: A MODERN APPROACH TO DISPUTE RESOLUTION",
        blogimg: blog5img,
        bloghref:"/dispute-resolution-blog",
  
        blogcontent:
          "Arbitration in India, governed by the Arbitration and Conciliation Act, 1996, offers a cost-effective, efficient, and confidential dispute resolution method.",
      },
      {
        id: 6,
        blogtype : "row2", 
        blogtitle:
          "DATA PROTECTION AND PRIVACY LAWS IN INDIA: NAVIGATING THE DIGITAL AGE",
        blogimg: blog6img,
        bloghref:"/data-protection-blog",
  
        blogcontent:
          "In India, data protection is crucial as data becomes a valuable asset. The evolving legal framework ensures individual privacy  addressing data security challenges effectively.",
      },
      {
        id: 7,
        blogtype : "row3", 
        blogtitle:
          "NAVIGATING FAMILY AND MATRIMONIAL DISPUTES: LEGAL REMEDIES AND COUNSELLING OPTIONS",
        blogimg: blog7img,
         bloghref:"/family-blog",
        blogcontent:
          "Family and matrimonial disputes in India involve emotional, financial, and social challenges. The legal system offers resolving issues like divorce, custody, alimony, and property division.",
      },
      {
        id: 8,
        blogtype : "row3", 
        blogtitle:"ESSENTIALS OF CONTRACT LAW IN INDIA: DRAFTING AND ENFORCING COMMERCIAL AGREEMENTS",
         
        blogimg: blog8img,
        bloghref:"/commercial-blog",
  
        blogcontent:
        "Contracts are vital in commercial transactions, providing clarity and enforceability. The Indian Contract Act, 1872, establishes principles for creating, interpreting, and enforcing agreements in India.",
      },
{
      id: 9,
      blogtype : "row3", 
      blogtitle:" LEGAL ASPECTS OF REAL ESTATE TRANSACTIONS: DUE DILIGENCE AND DOCUMENTATION",
       
      blogimg: blog9img,
      bloghref:"/real-estate-blog",

      blogcontent:
      "Real estate transactions involve significant investments and legal formalities. To safeguard against fraud and disputes, buyers and sellers must prioritize due diligence and ensure proper documentation.",
    },
  
    ];


   export const filtertest1 = BlogItems.filter((blog)=> blog.blogtype ==="row1")

   export const filtertest2 = BlogItems.filter((blog)=> blog.blogtype ==="row2")

   export const filtertest3 = BlogItems.filter((blog)=> blog.blogtype ==="row3")

   console.log(filtertest1)


