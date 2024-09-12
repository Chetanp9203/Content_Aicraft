
export default  [
    {
        name:'Blog Title',
        desc:"An AI tool that delivers standout and memorable blog post titles, helping you capture your audience's attention.",
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
        aiPrompt:'Give blog title based on given blog topic & outline in point wise manner in rich text editor format',
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
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text ediotr format',
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
        aiPrompt: 'Generates trending Blog Topic Ideas in bullet point, (no Description) based on niche in rich text editor format',
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
        aiPrompt: 'Give me Best SEO optimized high ranked  title ideas bullet wise only based on keywords and outline in rich text editor format',
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
        aiPrompt: 'Generate Youtube descriptions with emoji under 4-5 lines based on topic and outline in rich text editor format',
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
        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

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
        aiPrompt: 'Rewrite given article without any Plagiarism in rich text editor format',
        form: [
            {
                label: 'Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },

   
    {
        name: 'Add Emojis to Text',
        desc: "Boost your text's engagement with this AI tool that adds the  emojis to enhance your message. 🚀📝",
        icon: 'https://cdn-icons-png.flaticon.com/128/11202/11202612.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Give ways by adding Emoji to outline text depends on outline in bullets in rich text ediotr format.',
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
        aiPrompt: 'Generate  Instagram captions based on a given keywords in   rich text editor format',
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
        aiPrompt: 'Generate 15 Instagram hash tag based on a given keywords ',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
        ]
    },
   
    {
        name: "Tweet",
        desc: "An AI tool that generate Tweet based on your post  and outline information.",
        category: "Tweet",
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png",
        aiPrompt:
          "Give me 280 characters of tweet example on given niche & outline topic",
        slug: "generate-tweet-post",
        form: [
          {
            label: "Enter your tweet niche",
            field: "input",
            name: "niche",
            required: true,
          },
          {
            label: "Enter tweet outline",
            field: "textarea",
            name: "outline",
          },
        ],
      },
      
    {
        name: 'English Grammer Check',
        desc: "Boost your writing with this AI tool that offers precise English grammar checks, ensuring your content is flawless and well-structured.",
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596743.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer',
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
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/16865/16865519.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline, generate catchy 5-10 tagline for the business product in bullet points in rich text editor format',
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
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commerece business in rich text editor format',
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