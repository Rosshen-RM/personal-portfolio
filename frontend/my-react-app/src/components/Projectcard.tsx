import React from 'react'


interface Props { title: string; desc: string; img?: string }


const ProjectCard: React.FC<Props> = ({ title, desc, img }) => {
    return (
        <div className="bg-white dark:bg-(--dark-card) rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-48 relative bg-gray-100">
                {img ? <img src={img} alt={title} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-200" />}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-16">{desc}</p>
                <div className="flex flex-wrap gap-2 my-6">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-(--dark-background) text-gray-600 rounded-full text-sm">HTML5</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-(--dark-background) text-gray-600 rounded-full text-sm">CSS3</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-(--dark-background) text-gray-600 rounded-full text-sm">JavaScript</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">Youtube</a>
                    <a href="#" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Code</a>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard