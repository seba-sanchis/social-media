import Image from "next/image";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imageUrl: string;
  bio: string;
}

export default function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imageUrl,
  bio,
}: Props) {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-20 h-20 object-cover">
            <Image
              src={imageUrl}
              alt="Profile image"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">
              {name}
            </h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-lg text-base-regular text-light-2">{bio}</p>

      <div className="mt-12 w-full h-0.5 bg-dark-3" />
    </div>
  );
}
