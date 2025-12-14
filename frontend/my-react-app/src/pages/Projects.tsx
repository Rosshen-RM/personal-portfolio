    import React from 'react'
    import ProjectCard from '../components/Projectcard'


    const Projects: React.FC = () => {
        const projects = [
            { title: 'Timesheet App', desc: 'Full stack timesheet management system using Angular + Java.', img: '/src/assets/project1.jpg' },
            { title: 'HR Dashboard', desc: 'React dashboard with charts, authentication & sidebar.', img: '/src/assets/project2.jpg' }
        ]


        return (
            <section id="projects" className="py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">A selection of projects I've worked on</p>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((p) => <ProjectCard key={p.title} title={p.title} desc={p.desc} img={p.img} />)}
                    </div>
                </div>
            </section>
        )
    }


    export default Projects