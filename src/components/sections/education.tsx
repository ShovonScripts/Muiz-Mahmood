import { EDUCATION, COURSES } from "@/data/education";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <SectionWrapper
      id="education"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
        <SectionHeader
          id="education"
          title="Education & Training"
          desc="Formal education and continuous learning."
          className="static mb-12 mt-0 md:mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <div className="flex flex-col gap-3">
              {EDUCATION.map((item) => (
                <Card key={item.id} className="bg-card/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold tracking-tight">
                      {item.qualification}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {item.institution}
                      {item.group && (
                        <Badge
                          variant="outline"
                          className="ml-2 border-transparent bg-secondary/40 text-[10px] font-normal text-muted-foreground"
                        >
                          {item.group}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground/80">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </div>
                    {item.note && (
                      <p className="mt-1 text-[11px] italic text-muted-foreground/60">
                        {item.note}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              Courses
            </div>
            <div className="flex flex-col gap-3">
              {COURSES.map((course) => (
                <Card key={course.id} className="bg-card/60">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-base font-bold tracking-tight">
                        {course.title}
                      </CardTitle>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        {course.year}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {course.provider}
                    </div>
                  </CardHeader>
                  {course.topics && (
                    <CardContent className="pb-4">
                      <p className="text-xs text-muted-foreground/80">
                        {course.topics}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
