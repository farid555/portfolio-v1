import Title from "../../ui/Title";
import { IoMdArrowDropright } from "react-icons/io";

const ProfessionalSummery = () => {
  const tasks = [
    "Expertise in version control systems such as GIT",
    "In GIT, creating a Branch Merging Multiple Branches, and shifting files from one Branch to another Branch",
    "Experienced with docker, Creating containers attach volumes, creating docker images from docker file and published docker images to docker hub.",
    "Implemented testing environments for Kubernetes and administrated the Kubernetes clusters.",
    "Experienced with kubernetes Creation of pods, deployment, services, RollingUpdates, Load Balancer, AutoScaling.",
    "Experienced in creating multiple VPC’s and public, private subnets as per requirement and distributed them as groups into various availability zones of the VPC.",
    "Experienced with Infrastructure as Code (IaC) Terraform, launch Instance create VPC with subnet, Internet gateway, route table and security group.",
    "Hands on experience in automating CI & CD pipeline using Jenkins tools.",
    "Integrated GitHub with Jenkins by auto-triggering process.",
    "Integrated SonarQube with Jenkins for Continuous code Inspection.",
    "Knowledge of shell scripting for automating tasks for regular usage and system operations",
    "Experience in configuring and provisioning AWS services by using AWS CLI like EC2, VPC, AMI, EBS, ELB, Auto scaling, S3, and Route 53 in AWS.",
    "Experience in intergration of github, email, slack, maven, ansible, sonarqube ,Nexus with jenkins.",
    "Created NAT gateways and instances to allow communication from the private instances to the internet through bastion hosts.",
  ];

  return (
    <section
      id="ProfessionalSummery"
      className=" items-center gap-[50px] px-[40px] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto"
    >
      <Title number={"03"} title={"Professional Summery"}></Title>
      <div className="flex flex-col ">
        <div className="space-y-3  lg:w-[125%] ml-15 text-[#8892b0] shrink-0 gap-4">
          <ul className="flex flex-col gap-[10px] text-[15px]">
            {tasks.map((task) => (
              <li key={task} className="flex items-center gap-1">
                <IoMdArrowDropright className="text-[#61fad5]" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummery;
