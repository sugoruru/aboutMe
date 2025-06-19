import Image from "next/image";

const LinkBox = (props: {
	title: string;
	key: string;
	data: { title: string; img?: string; description: string; link: string }[];
}) => {
	return (
		<>
			<div className="flex justify-between items-center w-full mt-10">
				<div className="w-full">
					<h1 className="text-5xl font-semibold text-gray-900">
						{props.title}
					</h1>
				</div>
			</div>
			<div className="flex mt-3 justify-around flex-wrap">
				{props.data.map((item, index) => (
					<a
						href={item.link}
						className="w-96 my-3"
						key={`${props.key}_${index}`}
					>
						<div className="bg-white rounded-lg p-5 border border-gray-400 hover:bg-slate-100 transition shadow-lg">
							<div className="font-bold text-xl flex items-center">
								{item.title}
								{item.img && (
									<div className="flex justify-center h-6 mx-4">
										<Image
											fill
											src={item.img}
											alt=""
											className="image"
											sizes="256px"
										/>
									</div>
								)}
							</div>
							<div className="text-gray-700">{item.description}</div>
						</div>
					</a>
				))}
			</div>
		</>
	);
};

export default function Home() {
	return (
		<>
			<div className="md:mx-64">
				<div className="h-screen flex flex-col justify-center items-center">
					<div className="w-full">
						<div className="flex justify-center h-48">
							<Image
								fill
								src="/logo.png"
								alt=""
								className="image"
								sizes="256px"
							/>
						</div>
						<h1 className="text-6xl font-semibold text-gray-900 text-center mt-10">
							Hello!
							<br /> I&apos;m Ruku.
						</h1>
					</div>
					<div className="relative rounded-xl overflow-auto p-8 mt-5">
						<div className="flex justify-center">
							<div className="animate-bounce bg-white p-2 w-16 h-16 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
								<svg
									className="w-6 h-6 text-violet-700"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<title>Arrow</title>
									<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<LinkBox
					title="My Works"
					data={[
						{
							title: "TellPro",
							img: "/TellPro.png",
							description: "競技プログラマー向け記事投稿サイト",
							link: "https://tellpro.net",
						},
					]}
					key="My Works"
				/>
				<LinkBox
					title="Social Link"
					data={[
						{
							title: "AtCoder",
							img: "/atcoder.svg",
							description: "AtCoderのアカウント",
							link: "https://atcoder.jp/users/rurumaru",
						},
						{
							title: "CodeForces",
							img: "/codeforces.png",
							description: "CodeForcesのアカウント",
							link: "https://codeforces.com/profile/rurumaru",
						},
						{
							title: "OnlineMathContest",
							img: "/OnlineMathContestLogo.jpg",
							description: "OnlineMathContestのアカウント",
							link: "https://onlinemathcontest.com/users/rurumaru",
						},
						{
							title: "Yukicoder",
							img: "/yukicoder.png",
							description: "Yukicoderのアカウント",
							link: "https://yukicoder.me/users/20380",
						},
						{
							title: "X(Twitter)",
							img: "/X.png",
							description: "X(Twitter)のアカウント",
							link: "https://x.com/pg_rurukun",
						},
						{
							title: "GitHub",
							img: "/github.png",
							description: "GitHubのアカウント",
							link: "https://github.com/sugoruru",
						},
						{
							title: "Marshmallow",
							img: "/marshmallow.png",
							description: "マシュマロはこちらから",
							link: "https://marshmallow-qa.com/po1mkpadd2couqj?t=rwolR1&utm_medium=url_text&utm_source=promotion",
						},
						{
							title: "QCoder",
							img: "/qcoder.ico",
							description: "QCoderのアカウント",
							link: "https://www.qcoder.jp/ja/users/rurumaru",
						},
					]}
					key="Social Link"
				/>
				<LinkBox
					title="Chorome Extensions"
					data={[
						{
							title: "OMC Difficult Pies",
							img: "/OnlineMathContestLogo.jpg",
							description: "OMCにdifficulty-piesが表示されます",
							link: "https://greasyfork.org/ja/scripts/537420-omc-difficult-pies",
						},
						{
							title: "QCoder AC Problem",
							img: "/qcoder.ico",
							description: "QCoderの問題でACのものに色がつきます",
							link: "https://greasyfork.org/ja/scripts/537422-qcoder-ac-problem",
						},
						{
							title: "AC-Rotate",
							img: "/atcoder.svg",
							description: "AtCoderのAC等のラベルが回転します",
							link: "https://greasyfork.org/ja/scripts/537633-ac-rotate",
						},
						{
							title: "AtCoder-Favorite-Person-Colors",
							img: "/atcoder.svg",
							description: "AtCoderのお気に入り管理のユーザーに色がつきます",
							link: "https://greasyfork.org/ja/scripts/539986-atcoder-favorite-person-colors",
						},
					]}
					key="Chorome Extensions"
				/>
			</div>
		</>
	);
}
