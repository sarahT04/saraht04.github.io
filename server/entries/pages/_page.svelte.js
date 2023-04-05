import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, a as subscribe, d as each } from "../../chunks/index2.js";
import { d as derived, w as writable } from "../../chunks/index.js";
const AboutCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Cheerful" } = $$props;
  let { smaller = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.smaller === void 0 && $$bindings.smaller && smaller !== void 0)
    $$bindings.smaller(smaller);
  return `<div${add_attribute("class", `bg-quartenary text-secondary w-20 h-20 rounded-full relative`, 0)}><h2${add_attribute("class", `title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${smaller ? "!text-4xl" : ""} xs:!text-4xl`, 0)}>${escape(text)}</h2></div>`;
});
const Selfie = "/_app/immutable/assets/SarahSelfie.6ae8ddbf.png";
const AboutTagline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="max-w-[468px] w-full text-center mx-auto"><h1 class="section-title text-tertiary !text-[64px] mb-9">About</h1>
	<div class="w-[344px] relative mx-auto"><div class="h-[327px] w-[55px] bg-quartenary border-tertiary border-solid border-[1px] absolute left-0 -top-[22px]"></div>
		<img${add_attribute("src", Selfie, 0)} alt="Selfie of Sarah" class="my-6 ml-4"></div>
	<p class="paragraph !text-2xl text-justify mt-14">Hi! My name is Sarah. I&#39;m a self taught programmer. I am based in Indonesia, where I love to
		play video games and skates all day. I&#39;m a critical person in the stuffs I like, and a goofball
		when having fun. I&#39;m always enthusiastic to explore anything. So, don&#39;t hesitate to connect!
	</p></section>`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15.5" fill="#F3F3F3" stroke="black"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 4.60791C9.54875 4.60791 4.31995 9.83671 4.31995 16.2879C4.31995 21.4463 7.66715 25.8239 12.3071 27.3727C12.8895 27.4815 13.1071 27.1167 13.1071 26.8095C13.1071 26.5279 13.0943 25.6127 13.0943 24.6335C9.84315 25.3375 9.15835 23.2575 9.15835 23.2575C8.62715 21.9071 7.85915 21.5487 7.85915 21.5487C6.79675 20.8255 7.93595 20.8383 7.93595 20.8383C9.10715 20.9215 9.72795 22.0415 9.72795 22.0415C10.7711 23.8271 12.4607 23.3087 13.1263 23.0143C13.2287 22.2591 13.5359 21.7471 13.8687 21.4527C11.2767 21.1583 8.54395 20.1535 8.54395 15.6799C8.54395 14.4063 8.99835 13.3631 9.74715 12.5439C9.62555 12.2495 9.22875 11.0591 9.86235 9.45271C9.86235 9.45271 10.8415 9.13911 13.0751 10.6495C14.0095 10.3935 15.0079 10.2591 15.9999 10.2591C16.9919 10.2655 17.9903 10.3935 18.9247 10.6495C21.1519 9.13911 22.1311 9.45271 22.1311 9.45271C22.7647 11.0591 22.3679 12.2495 22.2463 12.5439C22.9951 13.3631 23.4495 14.4063 23.4495 15.6799C23.4495 20.1663 20.7167 21.1519 18.1183 21.4399C18.5343 21.8047 18.9119 22.5151 18.9119 23.6031C18.9119 25.1647 18.8991 26.4255 18.8991 26.8095C18.8991 27.1231 19.1103 27.4815 19.6991 27.3727C24.3391 25.8239 27.6799 21.4527 27.6799 16.2879C27.6799 9.83671 22.4511 4.60791 15.9999 4.60791Z" fill="#181616"></path><path d="M8.74232 21.3759C8.71672 21.4335 8.62712 21.4527 8.54392 21.4143C8.46072 21.3759 8.40952 21.2991 8.44152 21.2415C8.46712 21.1839 8.55672 21.1647 8.63992 21.2031C8.72312 21.2415 8.77432 21.3183 8.74232 21.3759Z" fill="#181616"></path><path d="M9.21597 21.9072C9.15837 21.9584 9.04957 21.9328 8.97917 21.856C8.90237 21.7728 8.88957 21.664 8.94717 21.6128C9.00477 21.5616 9.10717 21.5872 9.18397 21.664C9.26077 21.7472 9.27357 21.856 9.21597 21.9072Z" fill="#181616"></path><path d="M9.67677 22.5791C9.60637 22.6303 9.49117 22.5855 9.41437 22.4767C9.34397 22.3743 9.34397 22.2463 9.41437 22.1951C9.48477 22.1439 9.59997 22.1887 9.67677 22.2911C9.75357 22.3999 9.75357 22.5279 9.67677 22.5791Z" fill="#181616"></path><path d="M10.3103 23.2255C10.2463 23.2959 10.1119 23.2767 10.0095 23.1807C9.90714 23.0847 9.88154 22.9503 9.94554 22.8799C10.0095 22.8095 10.1503 22.8287 10.2463 22.9247C10.3487 23.0271 10.3743 23.1615 10.3103 23.2255Z" fill="#181616"></path><path d="M11.1807 23.6031C11.1551 23.6927 11.0207 23.7375 10.8863 23.6991C10.7519 23.6607 10.6687 23.5519 10.6943 23.4623C10.7199 23.3727 10.8543 23.3279 10.9887 23.3663C11.1167 23.4047 11.2063 23.5135 11.1807 23.6031Z" fill="#181616"></path><path d="M12.1344 23.6735C12.1408 23.7695 12.0256 23.8527 11.8848 23.8527C11.744 23.8591 11.6352 23.7759 11.6288 23.6799C11.6288 23.5839 11.7376 23.5007 11.8784 23.5007C12.0192 23.5007 12.1344 23.5775 12.1344 23.6735Z" fill="#181616"></path><path d="M13.0239 23.5264C13.0431 23.6224 12.9471 23.7184 12.8063 23.744C12.6719 23.7696 12.5439 23.712 12.5311 23.616C12.5119 23.52 12.6143 23.424 12.7487 23.3984C12.8831 23.3728 13.0047 23.4304 13.0239 23.5264Z" fill="#181616"></path></svg>`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D9D9D9"></circle><path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#007AB9"></path><path d="M25.5599 17.2875V23.884H21.7354V17.7296C21.7354 16.1843 21.1832 15.129 19.7985 15.129C18.7418 15.129 18.114 15.8395 17.8368 16.5274C17.7361 16.7733 17.7102 17.1147 17.7102 17.4595V23.8837H13.8854C13.8854 23.8837 13.9368 13.4602 13.8854 12.3813H17.7104V14.0113C17.7027 14.0241 17.6919 14.0366 17.6851 14.0489H17.7104V14.0113C18.2187 13.2292 19.1251 12.1112 21.1573 12.1112C23.6734 12.1112 25.5599 13.7551 25.5599 17.2875ZM9.88443 6.83667C8.57614 6.83667 7.72021 7.69545 7.72021 8.82376C7.72021 9.92812 8.55133 10.8117 9.83423 10.8117H9.85904C11.193 10.8117 12.0224 9.92812 12.0224 8.82376C11.997 7.69545 11.193 6.83667 9.88443 6.83667ZM7.94753 23.884H11.7708V12.3813H7.94753V23.884Z" fill="#F1F2F2"></path></svg>`;
});
const Wordpress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D9D9D9"></circle><g clip-path="url(#clip0_31_365)"><path d="M9.59906 9.87583H7.83191L12.6496 23.4944L15.3467 15.787L13.2556 9.87583H11.3911V8.57818H19.6477V9.87583H17.7142L22.5319 23.4944L24.2637 18.5455C26.5354 12.205 22.4017 10.2299 22.4017 8.81492C22.4017 7.39989 23.5489 6.25284 24.9638 6.25284C25.0404 6.25284 25.1147 6.25699 25.1875 6.26378C22.79 4.00049 19.5572 2.61255 15.9999 2.61255C11.3517 2.61255 7.25735 4.98184 4.85718 8.57818H9.59891V9.87583H9.59906Z" fill="#00769D"></path><path d="M2.61243 16.0001C2.61243 21.1255 5.49324 25.5775 9.72353 27.8271L3.68199 10.749C2.99378 12.3613 2.61243 14.1361 2.61243 16.0001Z" fill="#00769D"></path><path d="M27.651 9.40308C27.8425 10.5306 27.7845 11.7979 27.4907 13.0701H27.5439L27.3415 13.6485C27.2216 14.0662 27.0705 14.4934 26.899 14.9132L22.2925 27.8184C26.5139 25.5661 29.3874 21.1189 29.3874 15.9999C29.3874 13.6013 28.7559 11.3503 27.651 9.40308Z" fill="#00769D"></path><path d="M11.8711 28.7376C13.1717 29.1589 14.559 29.3874 16 29.3874C17.3744 29.3874 18.7003 29.18 19.9485 28.7952L16.0325 17.7256L11.8711 28.7376Z" fill="#00769D"></path><path d="M27.3137 4.68627C24.2917 1.66428 20.2737 0 15.9999 0C11.7262 0 7.70825 1.66428 4.68627 4.68627C1.66428 7.70825 0 11.7262 0 16C0 20.2738 1.66428 24.2917 4.68627 27.3137C7.70825 30.3356 11.7262 31.9999 16 31.9999C20.2738 31.9999 24.2917 30.3356 27.3137 27.3137C30.3357 24.2917 32 20.2737 32 16C31.9999 11.7262 30.3356 7.70825 27.3137 4.68627ZM15.9999 30.8713C7.79989 30.8713 1.12868 24.2 1.12868 16C1.12868 7.79996 7.79989 1.12868 15.9999 1.12868C24.2 1.12868 30.8712 7.79996 30.8712 16C30.8712 24.2 24.2 30.8713 15.9999 30.8713Z" fill="#00769D"></path></g><defs><clipPath id="clip0_31_365"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`;
});
const Logos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = {
    github: {
      href: "https://github.com/sarahT04",
      title: "Check out my github!"
    },
    linkedin: {
      href: "https://www.linkedin.com/in/sarah-tanujaya-b9495a1b4/",
      title: "See my linkedin profile"
    },
    wordpress: {
      href: "https://sarahsradio.wordpress.com/",
      title: "Read some of my blog posts"
    }
  };
  return `<div class="inline-flex gap-2"><a${add_attribute("href", links.github.href, 0)}${add_attribute("title", links.github.title, 0)}>${validate_component(Github, "Github").$$render($$result, {}, {}, {})}</a>
	<a${add_attribute("href", links.linkedin.href, 0)}${add_attribute("title", links.linkedin.title, 0)}>${validate_component(Linkedin, "Linkedin").$$render($$result, {}, {}, {})}</a>
	<a${add_attribute("href", links.wordpress.href, 0)}${add_attribute("title", links.wordpress.title, 0)}>${validate_component(Wordpress, "Wordpress").$$render($$result, {}, {}, {})}</a></div>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_35_239)"><path d="M2.18177 23.9997H7.27293V11.6356L0 6.18115V21.8179C0 22.3965 0.229864 22.9515 0.639025 23.3606C1.04819 23.7698 1.60313 23.9997 2.18177 23.9997Z" fill="#4285F4"></path><path d="M24.7271 23.9997H29.8182C30.3968 23.9997 30.9518 23.7698 31.361 23.3606C31.7701 22.9515 32 22.3965 32 21.8179V6.18115L24.7271 11.6356V23.9997Z" fill="#34A853"></path><path d="M24.7271 2.18177V11.6354L32 6.18095V3.27265C32 2.66488 31.8307 2.06912 31.5112 1.55212C31.1917 1.03512 30.7345 0.617308 30.1909 0.345505C29.6473 0.0737014 29.0387 -0.0413559 28.4334 0.0132253C27.8281 0.0678065 27.2499 0.28987 26.7637 0.654532L24.7271 2.18177Z" fill="#FBBC04"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.27295 11.6352V2.18164L16 8.72694L24.7271 2.18164V11.6352L16 18.1805L7.27295 11.6352Z" fill="#EA4335"></path><path d="M0 3.27265V6.18095L7.27293 11.6354V2.18177L5.23625 0.654532C4.75003 0.28987 4.17187 0.0678065 3.56656 0.0132253C2.96124 -0.0413559 2.35268 0.0737014 1.80908 0.345505C1.26547 0.617308 0.808292 1.03512 0.488768 1.55212C0.169244 2.06912 0 2.66488 0 3.27265Z" fill="#C5221F"></path></g><defs><clipPath id="clip0_35_239"><rect width="32" height="23.9994" fill="white"></rect></clipPath></defs></svg>`;
});
const UpArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.54163 18.3609L19.4583 1.63867" stroke="#D6E4E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.54163 1.63867H19.4583V18.3609" stroke="#D6E4E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const EmailInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text = "Say something nice..";
  return `<section class="inline-flex gap-1 lg:w-[438px] lg:h-[44px] w-full"><div class="inline-flex gap-3 max-w-[438px] w-full bg-quartenary items-center rounded-xl paragraph !text-[22px] text-slate-600 pl-2">${validate_component(Email, "Email").$$render($$result, {}, {}, {})}
		<div contenteditable="true" class="mt-2 w-full focus:outline-0">${(($$value) => $$value === void 0 ? `` : $$value)(text)}</div></div>
	<a${add_attribute("href", `mailto: sarahtanujaya@gmail.com?subject=Connecting from your portofolio website&body=${text}`, 0)} class="inline-flex bg-secondary items-center justify-center rounded-full w-16 h-11" title="Send me a mail!">${validate_component(UpArrow, "UpArrow").$$render($$result, {}, {}, {})}</a></section>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="text-tertiary p-6 !pb-0 lg:px-20"><div class="lg:inline-flex lg:w-full justify-between items-center"><h1 class="title mb-4">Let&#39;s connect!</h1>
		${validate_component(EmailInput, "EmailInput").$$render($$result, {}, {}, {})}</div>
	<div class="inline-flex items-center justify-between w-full xs:flex-col xs:items-start gap-3 mt-4"><p class="section-title !text-xl">Made with 🧡 by SvelteKit and Sarah.</p>
		${validate_component(Logos, "Logos").$$render($$result, {}, {}, {})}</div>
	<div class="bg-secondary w-full h-10 block mt-5 absolute left-0"></div></footer>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="about" class="max-w-2xl mx-auto relative p-6 lg:p-20 pt-0"><div class="mb-10 inline-flex w-full xs:justify-around justify-evenly gap-10">${validate_component(AboutCircle, "AboutCircle").$$render($$result, { text: "Critical" }, {}, {})}
		${validate_component(AboutCircle, "AboutCircle").$$render($$result, { text: "Flexible" }, {}, {})}</div>
	${validate_component(AboutTagline, "AboutTagline").$$render($$result, {}, {}, {})}
	<div class="mt-7 mb-10 inline-flex w-full xs:justify-around justify-evenly gap-10 lg:justify-between">${validate_component(AboutCircle, "AboutCircle").$$render($$result, { text: "Enthusiastic", smaller: true }, {}, {})}
		${validate_component(AboutCircle, "AboutCircle").$$render($$result, { text: "Cheerful" }, {}, {})}</div></section>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
const Wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative block h-[168px] overflow-hidden mb-24 border-b-2 rounded-es-lg rounded-ee-lg"><div class="wave"></div>
	<div class="wave"></div></div>`;
});
const HomeTagline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="text-tertiary max-w-[445px] w-full lg:text-justify relative mb-6"><h2 class="section-title">Sarah Tan</h2>
	<h1 class="title mt-3">Discover the <mark class="p-1 bg-tertiary text-primary rounded-md">potential</mark> of a self-motivated
		full-stack developer
	</h1></header>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="bg-secondary rounded-full w-[288px] h-[42px] paragraph text-quartenary mb-8 xs:mx-auto xs:mt-5"><ul class="list-none inline-flex w-full h-full items-center justify-around"><li><a href="#main">🧡</a></li>
		<li><a href="#works">Works</a></li>
		<li><a href="#about">About</a></li></ul></nav>`;
});
const Illustration = "/_app/immutable/assets/Illustration.8c5481a1.png";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main id="main" class="flex lg:p-20 xs:pt-0 justify-evenly lg:pb-2 p-10"><img${add_attribute("src", Illustration, 0)} alt="Illustration of Sarah" class="md:block hidden">
	<div>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
		${validate_component(HomeTagline, "HomeTagline").$$render($$result, {}, {}, {})}
		${validate_component(Logos, "Logos").$$render($$result, {}, {}, {})}
		<a href="#works" class="paragraph flex rounded-lg w-[136px] h-[40px] text-center bg-secondary text-quartenary items-center justify-center mt-5">Know more</a></div></main>`;
});
const Python = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2629 8.25429C16.2629 4.0073 17.4277 1.69691 23.8591 0.59674C28.2254 -0.151464 33.8238 -0.24499 39.046 0.59674C43.1706 1.26233 46.6422 4.26605 46.6422 8.25429V22.266C46.6422 26.3755 43.2717 29.7418 39.046 29.7418H23.8591C18.7048 29.7418 14.3608 34.0383 14.3608 38.8957V45.6184H9.13893C4.72191 45.6184 2.1502 42.5046 1.06986 38.1475C-0.387384 32.2941 -0.325523 28.8065 1.06986 23.2006C2.27967 18.3102 6.14536 15.7298 10.5627 15.7298H31.4552V13.8593H16.2626V8.25399L16.2629 8.25429Z" fill="url(#paint0_linear_35_133)"></path><path d="M46.6425 53.0948C46.6425 57.3418 42.8725 59.4928 39.0463 60.5656C33.29 62.183 28.6702 61.9354 23.8594 60.5656C19.8416 59.4215 16.2632 57.0833 16.2632 53.0948V39.0831C16.2632 35.0506 19.7013 31.6073 23.8594 31.6073H39.0463C44.1049 31.6073 48.5446 27.3332 48.5446 22.2663V15.7307H54.239C58.6618 15.7307 60.744 18.9433 61.8352 23.2015C63.3543 29.1155 63.4219 33.5383 61.8352 38.1485C60.2992 42.6265 58.656 45.6193 54.239 45.6193H31.4556V47.4898H46.6425V53.0948Z" fill="url(#paint1_linear_35_133)"></path><path d="M20.0609 7.32481C20.0609 5.77353 21.3326 4.51904 22.9085 4.51904C24.4783 4.51904 25.756 5.77322 25.756 7.32481C25.756 8.8711 24.4786 10.125 22.9085 10.125C21.3332 10.125 20.0609 8.87078 20.0609 7.32481ZM37.1493 54.0246C37.1493 52.4783 38.4267 51.2244 39.9968 51.2244C41.5721 51.2244 42.8444 52.4786 42.8444 54.0246C42.8444 55.5758 41.5727 56.8303 39.9968 56.8303C38.427 56.8303 37.1493 55.5762 37.1493 54.0246Z" fill="white"></path><defs><linearGradient id="paint0_linear_35_133" x1="46.6425" y1="17.734" x2="0.000499545" y2="17.3547" gradientUnits="userSpaceOnUse"><stop stop-color="#366A96"></stop><stop offset="1" stop-color="#3679B0"></stop></linearGradient><linearGradient id="paint1_linear_35_133" x1="62.9997" y1="38.7093" x2="-29.3292" y2="38.7093" gradientUnits="userSpaceOnUse"><stop stop-color="#FFC836"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient></defs></svg>`;
});
const React = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="64" height="57" viewBox="0 0 64 57" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_35_129)"><path d="M26.2926 28.4101C26.2926 25.2545 28.8558 22.6914 32.0114 22.6914C35.167 22.6914 37.7302 25.2545 37.7302 28.4101C37.7302 31.5657 35.167 34.1289 32.0114 34.1289C28.8558 34.1289 26.2926 31.5657 26.2926 28.4101ZM64 28.4101C64 32.3403 59.3635 36.3161 51.8904 38.7882C51.503 38.9135 51.1043 39.0388 50.6942 39.1641C50.8423 39.7451 50.9676 40.3147 51.0815 40.8729C51.7764 44.4044 51.8904 47.6853 51.4005 50.351C50.8765 53.1876 49.6917 55.204 47.9829 56.1951C47.1285 56.6964 46.1146 56.947 44.9868 56.947C41.8882 56.947 37.958 55.0787 33.8569 51.5472C33.2759 51.0459 32.7063 50.5219 32.1253 49.9637C31.681 50.3966 31.2367 50.8067 30.7925 51.194C28.0812 53.5636 25.2901 55.2951 22.7383 56.1951C21.4055 56.6736 20.1524 56.9128 19.036 56.9128C17.874 56.9128 16.8487 56.6622 15.9829 56.1609C12.7134 54.2699 11.5742 48.8245 12.9527 41.5906C13.0894 40.8501 13.2602 40.0869 13.4539 39.3122C12.8501 39.1413 12.2691 38.9591 11.7109 38.7654C8.30474 37.6034 5.41118 36.0541 3.34923 34.2884C1.16198 32.4201 0 30.3809 0 28.4101C0 24.628 4.14667 20.9256 11.1072 18.5105C11.8704 18.2485 12.6679 17.9979 13.4881 17.7586C13.3058 17.0409 13.1463 16.3346 13.0096 15.6397C12.3375 12.1994 12.2122 9.0438 12.6451 6.50339C13.1235 3.73514 14.2513 1.76434 15.926 0.796019C19.3208 -1.17479 25.0965 0.852979 30.9747 6.08189C31.3279 6.40086 31.681 6.73123 32.0456 7.07299C32.581 6.56035 33.1164 6.07049 33.6404 5.60342C36.2834 3.30225 38.9605 1.61624 41.3756 0.727668C44.0071 -0.240649 46.2855 -0.240649 47.9487 0.716276C51.3549 2.67569 52.4827 8.69064 50.8879 16.3916C50.7967 16.8587 50.6828 17.3257 50.5689 17.8042C51.2752 18.0093 51.9587 18.2257 52.6194 18.4536C55.9345 19.5927 58.7255 21.0737 60.7077 22.7141C62.8608 24.5141 64 26.4849 64 28.4101ZM33.9594 9.02101C35.7821 10.9804 37.6048 13.2588 39.3592 15.765C42.3781 16.0498 45.2602 16.5055 47.926 17.1207C48.0285 16.6878 48.131 16.2663 48.2108 15.8448C49.7031 8.58812 48.4158 4.14525 46.5817 3.0858C45.6476 2.55038 44.1324 2.61873 42.3097 3.29086C40.2022 4.06551 37.8213 5.58064 35.429 7.66537C34.9391 8.08687 34.4493 8.54255 33.9594 9.02101ZM16.8373 37.3414C18.66 37.7401 20.6308 38.0591 22.7269 38.2869C22.0434 37.2161 21.3713 36.1225 20.722 35.0061C20.084 33.9124 19.4802 32.8074 18.9106 31.7024C18.1018 33.6162 17.3955 35.5187 16.8373 37.3414ZM20.722 21.9509C21.3599 20.8573 22.0093 19.775 22.6814 18.727C20.6536 18.9776 18.7056 19.3193 16.8715 19.7181C17.4297 21.518 18.1132 23.3749 18.9106 25.2659C19.4802 24.1609 20.084 23.0559 20.722 21.9509ZM23.0915 33.639C24.0826 35.3478 25.1307 37.0111 26.2243 38.5945C28.0812 38.7085 30.0178 38.7768 32.0114 38.7768C34.0164 38.7768 35.9758 38.7085 37.8669 38.5717C38.9035 37.011 39.9288 35.3592 40.9427 33.6162C41.9452 31.8847 42.8679 30.1417 43.6995 28.4329C42.8679 26.7583 41.9566 25.0495 40.9427 23.3065C39.9516 21.5863 38.9149 19.9459 37.8555 18.3738C35.953 18.2257 33.9936 18.1574 32.0114 18.1574C30.052 18.1574 28.0926 18.2371 26.1787 18.3852C25.1079 19.9573 24.0598 21.6091 23.0801 23.3179C22.1004 25.0153 21.189 26.7469 20.3574 28.4785C21.189 30.1987 22.1004 31.9302 23.0915 33.639ZM41.3528 38.2414C43.4603 37.9908 45.4653 37.649 47.3222 37.2275C46.7526 35.439 46.0349 33.5479 45.1691 31.5885C44.5881 32.7163 43.9616 33.8555 43.3122 34.9833C42.6629 36.0997 42.0135 37.1933 41.3528 38.2414ZM47.1855 19.7522C45.34 19.3307 43.3806 18.989 41.3414 18.727C42.0021 19.7636 42.6515 20.8345 43.2894 21.9281C43.9388 23.0559 44.5539 24.1723 45.1349 25.2659C45.9438 23.3749 46.6387 21.518 47.1855 19.7522ZM28.2407 15.5144C29.4824 15.4575 30.7355 15.4233 32 15.4233C33.2873 15.4233 34.5518 15.4575 35.8163 15.5144C34.5746 13.8626 33.3101 12.3361 32.0456 10.969C30.7583 12.3475 29.4824 13.874 28.2407 15.5144ZM15.6981 15.1157C15.8234 15.7651 15.9715 16.4144 16.1424 17.0865C18.7967 16.4827 21.6789 16.0385 24.6978 15.7537C26.4521 13.2816 28.2862 11.0146 30.1431 9.00962C29.8241 8.70204 29.5052 8.40585 29.1862 8.13244C23.6269 3.21111 19.1385 2.10609 17.3044 3.16555C16.3702 3.70097 15.6753 5.05661 15.345 6.97046C14.969 9.1805 15.0829 12.0057 15.6981 15.1157ZM17.3386 28.4899C16.074 25.733 15.0146 23.0103 14.2172 20.4016C13.4539 20.618 12.7248 20.8459 12.0185 21.0965C5.61623 23.3293 2.74546 26.3824 2.74546 28.4215C2.74546 30.5404 5.83268 33.8783 12.5995 36.1908C13.1121 36.3617 13.6362 36.5326 14.183 36.6921C14.9918 34.0377 16.0513 31.2809 17.3386 28.4899ZM30.2115 48.0157C28.3318 46.0107 26.4863 43.7209 24.7205 41.2261C21.5991 40.9755 18.7056 40.5539 16.1082 39.973C15.926 40.702 15.7779 41.4083 15.6412 42.0919C14.3766 48.7562 15.5956 52.7661 17.3499 53.78C19.1841 54.8395 23.6155 53.837 29.0039 49.1207C29.3912 48.7789 29.8014 48.403 30.2115 48.0157ZM35.8733 41.4197C34.6088 41.4767 33.3101 41.5109 32.0114 41.5109C30.7355 41.5109 29.4938 41.4881 28.2748 41.4425C29.5393 43.1057 30.8266 44.6437 32.1253 46.0449C33.367 44.6664 34.6315 43.1285 35.8733 41.4197ZM48.4158 41.4083C48.3133 40.8957 48.1994 40.3831 48.0627 39.8476C45.4197 40.4628 42.5034 40.9071 39.4048 41.1805C37.639 43.7437 35.8277 46.0335 34.0392 47.9929C34.5746 48.5169 35.1214 49.0068 35.6454 49.4625C40.7832 53.8825 44.8615 54.8395 46.6273 53.8142C48.4614 52.7661 49.8056 48.4258 48.4158 41.4083ZM61.2773 28.4101C61.2773 27.3279 60.4571 26.052 58.9648 24.8103C57.2446 23.3749 54.7383 22.0648 51.7423 21.0281C51.1271 20.8231 50.4891 20.618 49.8398 20.4244C49.0538 22.9648 48.0057 25.6647 46.7184 28.4215C48.0627 31.2581 49.1563 33.9808 49.9537 36.5212C50.3183 36.4073 50.6828 36.2934 51.036 36.1794C58.0648 33.8555 61.2773 30.5176 61.2773 28.4101Z" fill="#007AB9"></path></g><defs><clipPath id="clip0_35_129"><rect width="64" height="56.947" fill="white"></rect></clipPath></defs></svg>`;
});
const Svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53.9012 11.8432C47.7784 3.08466 35.6845 0.488548 26.9413 6.05698L11.5869 15.8397C10.5539 16.4887 9.59029 17.2433 8.71355 18.0915C7.83572 18.9396 7.04919 19.8769 6.36606 20.8878C5.68293 21.8987 5.1065 22.9779 4.64559 24.1076C4.18579 25.2379 3.84441 26.4128 3.62694 27.6135C3.44544 28.62 3.34643 29.6409 3.33323 30.6639C3.31893 31.688 3.39043 32.7111 3.54554 33.722C3.70065 34.7341 3.93936 35.7318 4.25837 36.7042C4.57738 37.6767 4.9767 38.6205 5.45192 39.527C5.125 40.0238 4.82321 40.5367 4.54768 41.0637C4.27157 41.5906 4.02296 42.1319 3.80185 42.6841C3.58074 43.2363 3.38823 43.7995 3.22433 44.3716C3.06042 44.9436 2.92621 45.5233 2.82061 46.1085C2.3818 48.5695 2.43978 51.0934 2.99112 53.5316C3.26613 54.7472 3.66104 55.933 4.17147 57.0705C4.68189 58.2079 5.30341 59.2926 6.02944 60.3068C12.1523 69.0654 24.2451 71.6615 32.9883 66.0931L48.3427 56.3511C49.3756 55.7009 50.3371 54.9452 51.2138 54.096C52.0904 53.2474 52.8767 52.3103 53.5602 51.2997C54.2433 50.2898 54.8198 49.2107 55.2807 48.0809C55.7416 46.9523 56.0837 45.7774 56.3026 44.5773C56.4841 43.5707 56.582 42.551 56.5952 41.5279C56.6084 40.5049 56.5369 39.4819 56.3807 38.4709C56.2256 37.46 55.9869 36.4633 55.6668 35.4909C55.3467 34.5196 54.9474 33.5757 54.4721 32.6693C54.7989 32.1732 55.1014 31.6594 55.3775 31.1325C55.6525 30.6056 55.9022 30.0644 56.1233 29.5121C56.3444 28.9599 56.538 28.3967 56.703 27.8247C56.8669 27.2538 57.0033 26.674 57.1101 26.0888C57.3279 24.8612 57.4225 23.6148 57.3939 22.3685C57.3653 21.1221 57.2124 19.8823 56.9373 18.6657C56.6623 17.4501 56.2674 16.2643 55.757 15.1269C55.2472 13.9892 54.6256 12.9051 53.9012 11.8905" fill="#FF3E00"></path><path d="M25.4409 61.1539C24.2391 61.4661 22.9968 61.5929 21.7568 61.5301C20.517 61.4663 19.2938 61.2155 18.1299 60.7832C16.9661 60.3515 15.8748 59.7451 14.8936 58.9846C13.9133 58.2236 13.0546 57.3178 12.347 56.2983C11.9103 55.6878 11.5363 55.0365 11.2305 54.3523C10.9238 53.6685 10.6861 52.9558 10.5209 52.2248C10.357 51.4933 10.2646 50.7474 10.2481 49.9983C10.2316 49.2492 10.2899 48.5001 10.4219 47.7619C10.4428 47.642 10.467 47.5221 10.4934 47.4033C10.5187 47.2834 10.5473 47.1646 10.5781 47.0469C10.6078 46.9281 10.6408 46.8104 10.676 46.6927C10.7101 46.5761 10.7475 46.4595 10.786 46.344L11.0754 45.4606L11.8641 46.0492C12.3162 46.3792 12.7826 46.6905 13.2611 46.9809C13.7397 47.2724 14.2303 47.543 14.7319 47.7916C15.2324 48.0413 15.7451 48.2701 16.2654 48.4759C16.7857 48.6827 17.3148 48.8664 17.8516 49.0281L18.4402 49.1986L18.3874 49.7871C18.359 50.1876 18.4007 50.5901 18.5106 50.9763C18.5645 51.1699 18.636 51.3569 18.7229 51.5373C18.8098 51.7177 18.9121 51.8904 19.0287 52.0532C19.2423 52.3603 19.5016 52.6329 19.7976 52.8617C20.0924 53.0905 20.4213 53.2732 20.7723 53.403C21.1232 53.5328 21.4906 53.6076 21.8646 53.6263C22.2375 53.6461 22.6115 53.6076 22.9734 53.513C23.0571 53.491 23.1385 53.4657 23.2199 53.4371C23.3013 53.4085 23.3816 53.3777 23.4597 53.3425C23.5389 53.3084 23.6159 53.271 23.6929 53.2303C23.7688 53.1907 23.8425 53.1477 23.9151 53.1015L39.2464 43.3177C39.4344 43.1999 39.6095 43.0628 39.7689 42.9085C39.9285 42.7534 40.0704 42.5829 40.1947 42.3992C40.319 42.2155 40.4224 42.0186 40.506 41.8129C40.5885 41.6072 40.6501 41.3938 40.6897 41.176C40.7282 40.9526 40.7447 40.7271 40.7392 40.5005C40.7337 40.275 40.7051 40.0506 40.6545 39.8295C40.605 39.6095 40.5324 39.395 40.4389 39.1882C40.3465 38.9825 40.2321 38.7867 40.1001 38.6029C39.8866 38.296 39.6281 38.0243 39.3322 37.7955C39.0363 37.5667 38.7074 37.3841 38.3576 37.2543C38.007 37.1244 37.6386 37.0488 37.2652 37.0299C36.8912 37.0112 36.5172 37.0497 36.1553 37.1432C36.0728 37.1652 35.9903 37.1905 35.9089 37.2191C35.8275 37.2477 35.7483 37.2785 35.6691 37.3126C35.5899 37.3478 35.5129 37.3852 35.437 37.4259C35.3611 37.4655 35.2863 37.5095 35.2137 37.5557L29.3262 41.2937C29.0864 41.4455 28.84 41.5885 28.5892 41.7227C28.3373 41.8558 28.0821 41.9801 27.8214 42.0945C27.5606 42.2089 27.2955 42.3134 27.0271 42.4069C26.7587 42.5015 26.487 42.5851 26.212 42.6588C25.0118 42.969 23.7721 43.0944 22.5345 43.0306C21.297 42.9668 20.077 42.7149 18.9154 42.2848C17.7537 41.8536 16.6647 41.2475 15.6856 40.4884C14.7066 39.7294 13.8486 38.8263 13.1412 37.8087C12.7067 37.1982 12.3338 36.5459 12.0291 35.8616C11.7233 35.1774 11.4868 34.4646 11.3229 33.7341C11.159 33.0026 11.0688 32.2568 11.0534 31.5077C11.0369 30.7596 11.0952 30.0105 11.2283 29.2735C11.4883 27.8223 12.0481 26.4414 12.8717 25.2187C13.696 23.996 14.7664 22.9589 16.0146 22.1738L31.3932 12.3911C31.6319 12.2392 31.8761 12.0962 32.1258 11.962C32.3755 11.8289 32.6308 11.7046 32.8893 11.5902C33.1483 11.4758 33.4118 11.3716 33.6791 11.2778C33.9453 11.1832 34.2159 11.0985 34.4898 11.0248C35.6911 10.7135 36.933 10.5859 38.1717 10.6486C39.4114 10.7124 40.6336 10.9632 41.7974 11.3955C42.9613 11.8267 44.0514 12.434 45.0327 13.1941C46.0127 13.9555 46.871 14.8617 47.5782 15.8815C48.0138 16.4909 48.3889 17.1422 48.6958 17.8264C49.0027 18.5106 49.2403 19.2223 49.4064 19.9539C49.5714 20.6854 49.6639 21.4312 49.6804 22.1804C49.698 22.9295 49.6408 23.6786 49.5087 24.4168C49.4856 24.5378 49.4614 24.6588 49.4339 24.7787C49.4075 24.8986 49.3789 25.0185 49.3481 25.1373C49.3184 25.2572 49.2854 25.376 49.2513 25.4937C49.2172 25.6125 49.182 25.7302 49.1435 25.8468L48.8498 26.7302L48.0666 26.1416C47.6134 25.8083 47.1458 25.4959 46.6662 25.2022C46.1866 24.9096 45.6938 24.6368 45.1911 24.3849C44.1846 23.8828 43.1377 23.4662 42.0614 23.1396L41.4718 22.9691L41.5257 22.3806C41.5422 22.1793 41.5411 21.9769 41.5224 21.7766C41.5048 21.5764 41.4685 21.3773 41.4157 21.1826C41.3618 20.989 41.2925 20.7987 41.2056 20.6172C41.1198 20.4346 41.0175 20.2608 40.9009 20.0958C40.6863 19.7943 40.427 19.5272 40.132 19.3037C39.8374 19.0793 39.5102 18.9012 39.1617 18.7757C38.4615 18.5217 37.7005 18.4875 36.9803 18.6778C36.8967 18.6998 36.8142 18.7251 36.7339 18.7526C36.6525 18.7812 36.5722 18.8131 36.493 18.8472C36.4149 18.8813 36.3368 18.9198 36.2609 18.9594C36.185 19.0001 36.1102 19.043 36.0376 19.0892L20.6777 28.8554C20.4906 28.9731 20.3157 29.1106 20.1573 29.2647C19.9989 29.4187 19.8559 29.5892 19.7316 29.7718C19.6084 29.9555 19.504 30.1512 19.4203 30.3559C19.3367 30.5616 19.2751 30.7739 19.2355 30.9917C19.197 31.215 19.1805 31.4416 19.186 31.6683C19.1992 32.1219 19.3012 32.5685 19.4863 32.9828C19.5796 33.1891 19.6927 33.3858 19.824 33.5702C20.0363 33.8738 20.2937 34.1445 20.5875 34.3711C20.8806 34.5987 21.2066 34.7805 21.5544 34.9101C22.2537 35.1701 23.0155 35.2119 23.7391 35.03C23.8216 35.0069 23.9041 34.9816 23.9855 34.953C24.0658 34.9244 24.1461 34.8925 24.2253 34.8584C24.3041 34.8241 24.3816 34.7867 24.4574 34.7462C24.5333 34.7066 24.6081 34.6637 24.6807 34.6175L30.5682 30.8861C30.8091 30.7321 31.0544 30.5869 31.3063 30.4527C31.5571 30.3174 31.8134 30.1931 32.0752 30.0776C32.3362 29.9631 32.6015 29.8589 32.8706 29.7652C33.1401 29.6706 33.4129 29.587 33.689 29.5144C34.8902 29.202 36.1311 29.0743 37.3708 29.136C38.6106 29.1987 39.8327 29.4495 40.9966 29.8807C42.1593 30.3119 43.2506 30.918 44.2307 31.6793C45.212 32.4394 46.07 33.3447 46.7773 34.3645C47.213 34.975 47.587 35.6262 47.8939 36.3104C48.2008 36.9943 48.4388 37.7069 48.6045 38.4379C48.7695 39.1684 48.8619 39.9142 48.8795 40.6633C48.8971 41.4136 48.8388 42.1627 48.7079 42.8997C48.5782 43.6234 48.3736 44.3316 48.0974 45.0129C47.8214 45.6944 47.4748 46.3452 47.0633 46.9545C46.653 47.5639 46.18 48.1293 45.652 48.6409C45.124 49.1524 44.5442 49.6078 43.9216 49.9994L28.5606 59.7821C28.3197 59.935 28.0733 60.0791 27.8225 60.2133C27.5705 60.3475 27.3142 60.4719 27.0524 60.5863C26.7917 60.7018 26.5266 60.8063 26.2571 60.9009C25.9887 60.9955 25.7159 61.0802 25.4409 61.1539Z" fill="white"></path></svg>`;
});
const Reports = "/_app/immutable/assets/reports.bbb7a1f4.png";
const Erika = "/_app/immutable/assets/erika.9895ec6d.png";
const Skk = "/_app/immutable/assets/skk.a57ced01.png";
const LittleLemon = "/_app/immutable/assets/little_lemon.1b270f91.png";
const Tdd = "/_app/immutable/assets/tdd.55da46e5.png";
const TreasureHunt = "/_app/immutable/assets/treasure_hunt.b61eed18.png";
const Scheduler = "/_app/immutable/assets/scheduler.7e695f4f.png";
const Namecard = "/_app/immutable/assets/namecard.302913b0.png";
const projectDatas = {
  React: [
    {
      title: "Reports",
      src: Reports,
      description: "A simple website to store, see, and create teacher's reports of a student's performance.",
      href: "https://github.com/sarahT04/reports",
      technologyUsed: "Next 12, TanStack Query, Chakra UI, Mongodb, etc."
    },
    {
      title: "Little Lemon",
      src: LittleLemon,
      description: "Front-End Developer Capstone project for META.",
      href: "https://github.com/sarahT04/meta-capstone",
      technologyUsed: "React, React-router, Figma, Jest, etc."
    },
    {
      title: "Studio Kotak Katik",
      src: Skk,
      description: "Website for Studio Kotak Katik, a learning community.",
      href: "https://skk-website-eta.vercel.app/",
      technologyUsed: "Next 13, NextAuth, Material UI, MySQL, AWS, etc."
    },
    {
      title: "Erika",
      src: Erika,
      description: "RISTEK Sistech Mentorship Program Software Engineering division Final Project.",
      href: "https://github.com/sarahT04/sistech-finpro",
      technologyUsed: "Next 12, React-router, Redux, Firestore, etc."
    }
  ],
  Svelte: [
    {
      title: "Codenames Chat",
      src: Reports,
      description: "A chatting app with no credentials. Access with only a nickname, room name and passcode.",
      href: "https://github.com/sarahT04/reports",
      technologyUsed: "Firestore, Tailwind, etc."
    },
    {
      title: "Namecard",
      src: Namecard,
      description: "To access my online namecard.",
      href: "https://github.com/sarahT04/reports",
      technologyUsed: "Tailwind, etc."
    },
    {
      none: true,
      title: "NoneSvelte1"
    },
    {
      none: true,
      title: "NoneSvelte2"
    }
  ],
  Python: [
    {
      title: "Harvard CS50 Django Projects",
      src: Scheduler,
      description: "My Django projects to graduate from Harvard's CS50 Web Programming with Python & JS.",
      href: "https://github.com/me50/sarahT04/tree/main",
      technologyUsed: "Django, etc."
    },
    {
      title: "CLI Scheduler",
      src: Scheduler,
      description: "A CLI scheduler with Python and JSON.",
      href: "https://github.com/sarahT04/reports",
      technologyUsed: "JSON, CLI prompts, etc."
    },
    {
      title: "TDD & Vigenere Cipher",
      src: Tdd,
      description: "Login and register data encryption using Vigenere Cipher with Test Driven Development.",
      href: "https://github.com/sarahT04/TDD-Vigenere",
      technologyUsed: "MySQL, unittest, etc."
    },
    {
      title: "Treasure Hunt",
      src: TreasureHunt,
      description: "Ever want to try to play a treasure hunt game with a CLI?",
      href: "https://github.com/sarahT04/treasure-hunt",
      technologyUsed: "randint, pythagoras, string loop, etc."
    }
    // {
    // 	title: 'DOCX Image Extractor',
    // 	src: Docx,
    // 	description:
    // 		"Extract the images inside an unzipped DOCX file and rename it.",
    // 	href: 'https://github.com/sarahT04/docx_image_extractor',
    // 	technologyUsed: 'zipfile, etc.'
    // },
  ]
};
const worksActiveTab = writable("React");
const worksActiveDatas = derived(worksActiveTab, ($worksActiveTab) => [...projectDatas[$worksActiveTab]]);
const ProjectButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worksActiveTab, $$unsubscribe_worksActiveTab;
  $$unsubscribe_worksActiveTab = subscribe(worksActiveTab, (value) => $worksActiveTab = value);
  const keys = ["React", "Svelte", "Python"];
  $$unsubscribe_worksActiveTab();
  return `<aside class="w-full max-w-[352px] h-[121px] bg-secondary border-tertiary rounded-lg border-[1px] border-solid inline-flex justify-around items-center xs:mt-8 mx-auto lg:mx-0">${each(keys, (_key) => {
    return `<div${add_attribute("title", `Check my ${_key} project!`, 0)}${add_attribute("class", `w-[70px] h-[70px] bg-quartenary rounded-lg inline-flex items-center justify-center ${$worksActiveTab === _key ? "" : "grayscale"} hover:grayscale-0 transition-all cursor-pointer`, 0)}>${_key === "React" ? `${validate_component(React, "React").$$render($$result, {}, {}, {})}` : `${_key === "Svelte" ? `${validate_component(Svelte, "Svelte").$$render($$result, {}, {}, {})}` : `${validate_component(Python, "Python").$$render($$result, {}, {}, {})}`}`}
		</div>`;
  })}</aside>`;
});
const ProjectGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { none = false } = $$props;
  let { projectDatas: projectDatas2 } = $$props;
  const { title, description, src, technologyUsed, href } = projectDatas2;
  if ($$props.none === void 0 && $$bindings.none && none !== void 0)
    $$bindings.none(none);
  if ($$props.projectDatas === void 0 && $$bindings.projectDatas && projectDatas2 !== void 0)
    $$bindings.projectDatas(projectDatas2);
  return `<div class="w-[241px] h-[203px] lg:w-[314px] lg:h-[264px] my-shadow rounded-lg bg-white inline-flex items-center justify-center flex-col relative project-gallery-wrapper gap-3">${none ? `<p class="section-title text-center !text-2xl lg:!text-3xl">No other projects...</p>` : `<img${add_attribute("src", src, 0)}${add_attribute("alt", `Snapshot of ${title}`, 0)}>
		<p class="section-title !text-2xl">${escape(title)}</p>
		<div class="bg-quartenary w-[241px] h-[190px] lg:w-[314px] lg:h-[245px] rounded-lg absolute top-5 px-4 py-3 border-solid border-[1px] border-secondary flex flex-col justify-around items-stretch opacity-0 invisible project-gallery-hover"><p class="section-title text-center !text-2xl lg:!text-3xl">${escape(title)}</p>
			<p class="paragraph text-justify !text-md lg:!text-xl lg:!leading-5">${escape(description)}</p>
			<div><p class="paragraph text-slate-600 lg:mb-1 !text-sm lg:!text-lg">TECH USED:</p>
				<p class="paragraph !text-md lg:!text-xl lg:!leading-5">${escape(technologyUsed)}</p></div>
			<a${add_attribute("href", href, 0)}${add_attribute("title", `Check ${title} on Github.`, 0)} class="paragraph underline !text-sm lg:!text-base">View on Github -&gt;</a></div>`}</div>`;
});
const ProjectsTagline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="projects" class="text-tertiary max-w-[352px] w-full lg:text-justify"><h2 class="section-title">Projects</h2>
	<h1 class="title mt-5">Some of the projects I&#39;ve worked on.</h1>
	<h4 class="paragraph mt-2 max-w-[210px] w-full">Projects that were built for self and for certification purposes.
	</h4></section>`;
});
const Works = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worksActiveDatas, $$unsubscribe_worksActiveDatas;
  $$unsubscribe_worksActiveDatas = subscribe(worksActiveDatas, (value) => $worksActiveDatas = value);
  {
    console.log($worksActiveDatas);
  }
  $$unsubscribe_worksActiveDatas();
  return `<section id="works" class="max-w-[928px] w-full mx-auto p-6 lg:p-20 pt-0"><div class="flex justify-between md:flex-row flex-col gap-4 mx-auto">${validate_component(ProjectsTagline, "ProjectsTagline").$$render($$result, {}, {}, {})}
		${validate_component(ProjectButtons, "ProjectButtons").$$render($$result, {}, {}, {})}</div>
	<div class="bg-quartenary p-16 pb-28 h-fit w-full relative mt-8 grid gap-[78px] md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows1 rounded-2xl z-0 justify-items-center">${each($worksActiveDatas, (project) => {
    return `${validate_component(ProjectGallery, "ProjectGallery").$$render(
      $$result,
      {
        none: project.none,
        projectDatas: project
      },
      {},
      {}
    )}`;
  })}
		<div class="bg-tertiary absolute md:h-3/4 h-[86%] lg:h-full lg:max-h-[608px] w-[150%] left-12 lg:left-8 top-28 -z-[1] rounded-lg"></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}
${validate_component(Wave, "Wave").$$render($$result, {}, {}, {})}
${validate_component(Works, "Works").$$render($$result, {}, {}, {})}
${validate_component(Wave, "Wave").$$render($$result, {}, {}, {})}
${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
