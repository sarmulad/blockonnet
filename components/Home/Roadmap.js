import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Roadmap() {
  const roadmapList = [
    {
      title: 'Phase I: Idea Generation',
      content:
        "During this stage, the project's conception and development are the primary concerns. Competitors' faults and defects will be examined by team members, and remedies will be proposed.",
    },
    {
      title: 'Phase II: Website Development',
      content:
        "The platform's website and ecosystem will be launched in this phase.",
    },
    {
      title: 'Phase III: Marketing',
      content:
        'More individuals buying a token means a higher price because of the increased scarcity. Hence, this stage will focus on reaching more prospective users.',
    },
    {
      title: 'Phase IV: Public Launch',
      content: "The project's formal launch is the focus of this phase.",
    },
  ];

  return (
    <section className="roadmap" id="roadmap">
      <Container>
        <div className="roadmap-area">
          <h2>Roadmap</h2>
          <div className="roadmap-list">
            {roadmapList.map((item, index) => (
              <div className="roadmap-item" key={index}>
                <h2 className="roadmap-title">{item.title}</h2>
                <p className="roadmap-content">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="roadmap-bg">
        <Image
          src="/images/roadmap.png"
          alt="roadmap"
          width={1512}
          height={1324}
          objectFit="contain"
        />
      </div>
    </section>
  );
}
