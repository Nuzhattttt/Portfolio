import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";

const researchPapers = [
    {
        "title": "Federated Learning for Brain Tumor Classification",
        "status": "Yet to be Submitted",
        "publicationLink": "",
        "description": [
            "Developed a privacy-preserving federated learning model for brain tumor classification.",
            "Implemented VGG16, MobileNet, NasNet Mobile, Inception V3, Xception, EfficientNet-B0, DenseNet-121, and ResNet-50 for deep learning-based classification.",
            "Explored model scaling and weight aggregation techniques, including weight scaling and averaging, to enhance federated model performance."
        ]
    },
    {
        "title": "Machine Learning for Heart Disease Detection",
        "status": "In Progress",
        "publicationLink": "",
        "description": [
            "Conducted a comparative study of six machine learning algorithms (Random Forest, Decision Tree, Naïve Bayes, SVM, Logistic Regression, KNN) for early heart disease detection.",
            "Analyzed three datasets, evaluating accuracy, sensitivity, specificity, and model performance across different patient records.",
            "Identified Random Forest and Decision Tree as the most effective models, achieving 98.54% accuracy, 97.09% sensitivity, and 100% specificity for one dataset."
        ]
    },
];

const Research = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="rounded-xl shadow-xl py-16">
            <h1 className="mt-8 text-center text-5xl font-semibold text-white">Research Experience</h1>

            <div className="mt-10 max-w-4xl mx-auto space-y-6">
                {researchPapers.map((paper, index) => (
                    <div key={index} className="bg-opacity-15 bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-white">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold w-[44rem]">{paper.title}</h2>
                            <div className="flex items-center space-x-4 h-16">
                                <span
                                    className={`px-3 py-1 text-sm font-semibold rounded-lg w-[6rem] text-center ${paper.status === "Published" ? "bg-rose-600" : "bg-rose-500"
                                        }`}
                                >
                                    {paper.status}
                                </span>
                                <button onClick={() => toggleExpand(index)}>
                                    {expandedIndex === index ? (
                                        <FaChevronUp className="text-gray-200 hover:text-white transition" />
                                    ) : (
                                        <FaChevronDown className="text-gray-200 hover:text-white transition" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {expandedIndex === index && (
                            <div className="mt-3 pt-3">
                                {paper.publicationLink && (
                                    <a
                                        href={paper.publicationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-rose-300 hover:underline space-x-2"
                                    >
                                        <span>View Publication</span>
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                )}
                                <ul className="mt-3 text-gray-300 list-disc list-inside">
                                    {paper.description.map((des, i) => (
                                        <li key={i} className="mt-1">{des}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;