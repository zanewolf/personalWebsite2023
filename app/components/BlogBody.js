import { MARKS,BLOCKS, INLINES } from "@contentful/rich-text-types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Link from 'next/link'
import slugify from 'slugify'
import ReactPlayer from 'react-player/lazy'
import React from 'react'

function getPlainTextFromHeader(contentNode) {
    return contentNode.content[0].value
//     return (contentNode.reduce((acc, current) => {
//         return acc + current.value
//     }, ''))
// }
}

export default function BlogBody({content,accentColor}) {
    const options = {
        renderMark:{
            [MARKS.ITALIC]: (node, children) => {
                return <i>{node}</i>
            },
            [MARKS.BOLD]: (node, children) => {
                return <b className={accentColor}>{node}</b>
            },
            [MARKS.CODE]: (node, children) => {
                return <code className={'bg-cyan-950 text-white font-accent font-light pl-2 mr-2'}>{node}</code>
                // return <span className={'bg-slate-700 text-yellow-500 font-accent font-light pl-2 mr-2'}>{node}</span>
            },
            [MARKS.UNDERLINE]: (node, children) => {
                return <u>{node}</u>
            },
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p className={'text-sm md:text-lg font-body mt-6 mb-6 text-shadow-sm antialiased subpixel-antialiased !leading-relaxed !tracking-wide'}>{children}</p>
            },
            [BLOCKS.QUOTE]: (node, children) => {
                return <blockquote className={'italic border-l-4 border-white pl-4 font-light'}>{children}</blockquote>
            },
            [BLOCKS.HEADING_2]: (node, children) => {

                return (
                    <div
                    id={slugify(getPlainTextFromHeader(node))}
                    className={`text-2xl md:text-4xl font-bold mt-4 lg:mt-12 mb-6 uppercase text-${accentColor}`}
                    >
                        {children}
                    </div>
                )
            },
            [BLOCKS.HEADING_3]: (node, children) => {
                return <div id={slugify(getPlainTextFromHeader(node))}
                            className={`text-xl md:text-3xl font-bold mt-4 lg:mt-12 mb-6 text-${accentColor} brightness-75`}>
                    {children}</div>
            },
            [BLOCKS.HEADING_4]: (node, children) => {
                return <div className={`text-lg md:text-2xl font-bold mt-3 mb-3 text-${accentColor} brightness-50`}>{children}</div>
            },
            [BLOCKS.UL_LIST]: (node, children) => {
                return <ul className={'list-disc ml-2 mr-2'}>{children}</ul>
            },
            [BLOCKS.OL_LIST]: (node, children) => {
                return <ol>{children}</ol>
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                // console.log(node.data.target.fields.file.contentType.split('/')[0])
                const { url, fileName } = node.data.target.fields.file;
                let contentType = node.data.target.fields.file.contentType.split('/')[0]
                let description = node.data.target.fields.description ;

                return (
                    <div className={'h-full w-full'}>
                        <img
                            src={url}
                            alt={fileName}
                            style={{ height: "auto",width: "auto", maxWidth:"100%", margin: "auto",justifyContent:'center' }}
                            // loading={'lazy'}
                        />
                        {description && <div className={'text-xs md:text-lg p-2 bg-neutral-800 text-gray-200 font-light italic'}>
                            {description}
                        </div>}
                    </div>
                );


            },
            [INLINES.HYPERLINK]: (node) => {
                const { uri } = node.data;
                const { value } = node.content[0];
                return (
                    <Link href={uri} className={`text-${accentColor} underline`}>
                            {value}
                    </Link>
                );
            },
        },
    };
    return (
        <div>
            <div className={''}>
                {documentToReactComponents(content, options)}
            </div>
        </div>
    )
}




// function getHeadersFromRichText(richText) {
//     console.log('richtext',richText)
//     const headers = (content) => content.nodeType === BLOCKS.HEADING_2
//
//     return richText.content.filter(headers).map((heading) => {
//         const plainText = getPlainTextFromHeader(heading.content)
//
//         return {
//             text: plainText,
//             href: `#${slugify(plainText)}`,
//         }
//     })
// }