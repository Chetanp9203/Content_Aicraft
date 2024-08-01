

export default  [
    {
        name:'Blog Title',
        desc:"An AI tool that delivers standout and memorable blog post titles, helping you capture your audience's attention.",
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
        aiPrompt:'Give blog title based on given blog topic & outline.',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'title',
                required:true
            },
            {
                label:'Enter blog outline (optional)',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: "An AI tool that simplifies content creation by delivering unique and buzz-worthy blog content.",
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: "An AI tool that generates engaging and viral-worthy blog topic ideas in your chosen language, helping you create compelling content effortlessly.",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9660/9660565.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generates trending Blog Topic Ideas in bullet point, (no Description) based on niche',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc:"An AI tool that crafts viral and attention-grabbing YouTube video titles in your preferred language, optimizing for maximum SEO impact.",
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/400/400426.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked  title ideas bullet wise only based on keywords and outline',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: "An AI tool that crafts engaging and optimized YouTube descriptions, ensuring your videos reach a wider audience.",
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10101/10101391.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube descriptions with emoji under 4-5 lines based on topic and outline',
        form: [
            {
                label: 'Enter your youtube topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: "An AI tool that provides innovative and effective YouTube tags, tailored to improve visibility and viewer engagement.",
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884882.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article',
        desc: "An AI tool that provides high-quality article rewrites, tailored to improve clarity and maintain the original essence.",
        icon: 'https://cdn-icons-png.flaticon.com/128/2992/2992156.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite given article without any Plagiarism',
        form: [
            {
                label: 'Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    // {
    //     name: 'Text Improver',
    //     desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/3055/3055740.png',
    //     category: 'Writing Assistant',
    //     slug: 'text-improver',
    //     aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter text that you want to re-write or improve',
    //             field: 'textarea',
    //             name: 'textToImprove'
    //         }
    //     ]
    // },
    {
        name: 'Add Emojis to Text',
        desc: "Boost your text's engagement with this AI tool that adds the  emojis to enhance your message. 🚀📝",
        icon: 'https://cdn-icons-png.flaticon.com/128/11202/11202612.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Give ways to Add Emoji to outline text depends on outline and rewrite it.',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Caption Generator',
        desc: "Elevate your Instagram game with this AI tool that generates personalized and engaging captions, perfect for your social media presence. 🚀💬",
        icon: 'https://cdn-icons-png.flaticon.com/128/5721/5721461.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate  Instagram captions based on a given keywords',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: "An AI tool that delivers effective and trending Instagram hashtags, ensuring your posts stand out and reach a larger audience.🌍📱",
        icon: 'https://cdn-icons-png.flaticon.com/128/15050/15050908.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag based on a given keywords',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    // {
    //     name: 'Instagram Post/Reel Idea',
    //     desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/15050/15050908.png',
    //     category: 'instagram',
       
    //     slug: 'instagram-post-idea-generator',
    //     aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter Keywords / Niche for your instagram idea',
    //             field: 'input',
    //             name: 'keywords',
    //             required:true
    //         },
           
    //     ]
    // },
    {
        name: 'English Grammer Check',
        desc: "Boost your writing with this AI tool that offers precise English grammar checks, ensuring your content is flawless and well-structured.",
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596743.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: "Effortlessly generate high-quality code with this AI tool, designed to enhance your coding efficiency and productivity.",
        icon:'https://cdn-icons-png.flaticon.com/128/3242/3242257.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDescripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: "Effortlessly decode and grasp complex programming logic with this AI tool, designed to offer intuitive explanations and insights into your code.",
        icon:'https://cdn-icons-png.flaticon.com/128/6404/6404558.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/5958/5958839.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution.',
        form: [
            {
                label: 'Enter code which you want to debug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/16865/16865519.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product.',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketing',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/12463/12463226.png',
        category: 'Marketing',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commerece business.',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },



]